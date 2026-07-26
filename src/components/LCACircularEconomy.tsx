import React, { useState } from 'react';
import { PolymerData } from '../types/polymer';

interface LCACircularEconomyProps {
  polymer: PolymerData;
}

export const LCACircularEconomy: React.FC<LCACircularEconomyProps> = ({ polymer }) => {
  const [pcrShare, setPcrShare] = useState<number>(20); // Post-Consumer Recycled content %

  // Calculate CO2 reduction based on PCR content (Standard ISO 14040 / ISO 14044 LCA metrics)
  // Virgin polymer baseline CO2 footprint (kg CO2e / kg polymer) according to ESU-services / PlasticsEurope LCA databases
  const baseCo2Map: Record<string, number> = {
    ldpe: 1.9,
    hdpe: 1.8,
    pp: 1.9,
    ps: 2.5,
    abs: 3.2,
    pvc: 1.9,
    pet: 2.3,
  };
  const virginCo2 = baseCo2Map[polymer.id] || 2.1; 
  // Recycled polymer CO2 is roughly ~0.6 kg CO2/kg (70% savings)
  const recycledCo2 = virginCo2 * 0.28;
  const netCo2 = Number((virginCo2 * (1 - pcrShare / 100) + recycledCo2 * (pcrShare / 100)).toFixed(2));
  const savingsPercent = Math.round(((virginCo2 - netCo2) / virginCo2) * 100);

  const lcaStages = [
    {
      stage: '۱. استخراج خوراک پتروشیمی',
      icon: '🛢️',
      desc: 'کرکینگ نفتا و گاز طبیعی جهت تولید مونومرهای اولیه',
      impact: `${(virginCo2 * 0.45).toFixed(1)} kg CO₂e`,
      badge: 'Upstream',
    },
    {
      stage: '۲. سنتز و پلیمریزاسیون',
      icon: '🧬',
      desc: 'واکنش‌های کاتالیستی صنعتی، گرانول‌سازی و افزودنی‌زدایی',
      impact: `${(virginCo2 * 0.35).toFixed(1)} kg CO₂e`,
      badge: 'Synthesis',
    },
    {
      stage: '۳. شکل‌دهی و تولید قطعه',
      icon: '🏭',
      desc: 'تزریق پلاستیک، اکستروژن یا قالب‌گیری بادی در کارخانجات پایینی',
      impact: `${(virginCo2 * 0.20).toFixed(1)} kg CO₂e`,
      badge: 'Processing',
    },
    {
      stage: '۴. چرخه بازیافت و پایان عمر (EoL)',
      icon: '♻️',
      desc: `بازیافت مکانیکی (ASTM D7611) یا بازیافت شیمیایی پیrolosis`,
      impact: pcrShare > 0 ? `کاهش ${savingsPercent}٪ در انتشار کربن` : 'پتانسیل بالادستی بازیافت',
      badge: 'Circular Loop',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-sm mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold mb-1.5">
            <span>🌿</span>
            <span>ارزیابی چرخه حیات و اقتصاد چرخه‌ای (ISO 14040 / ISO 14044 LCA)</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>چرخه حیات پلیمری و تحلیل ردپای کربن در گرید {polymer.code}</span>
          </h3>
        </div>

        <div className="en-mono text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900">
          استاندارد مرجع: ISO 14040 / ISO 15270
        </div>
      </div>

      {/* Interactive PCR Content Slider */}
      <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 p-4 rounded-xl mb-6">
        <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
          <span>سهم مواد بازیافتی مکانیکی (PCR - Post Consumer Recycled):</span>
          <span className="en-mono font-black text-emerald-600 dark:text-emerald-400 text-sm">{pcrShare}% PCR</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={pcrShare}
          onChange={(e) => setPcrShare(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
        />
        <div className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-3 pt-3 border-t border-emerald-200 dark:border-emerald-900/60">
          <div>
            ردپای کربن نهایی (Net CO₂ Footprint):{' '}
            <span className="en-mono text-base font-black text-emerald-600 dark:text-emerald-400">
              {netCo2} kg CO₂e / kg
            </span>
          </div>
          <div className="bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-xs font-bold en-mono">
            {savingsPercent}% کاهش انتشار دی‌اکسیدکربن
          </div>
        </div>
      </div>

      {/* 4 LCA Life Cycle Stages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {lcaStages.map((stg, idx) => (
          <div
            key={idx}
            className="bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/80 p-4 rounded-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stg.icon}</span>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full en-mono">
                  {stg.badge}
                </span>
              </div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white mb-1">{stg.stage}</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{stg.desc}</p>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-2 text-[11px] font-bold text-slate-700 dark:text-slate-300 en-mono flex justify-between items-center">
              <span>میزان آلایندگی:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{stg.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
