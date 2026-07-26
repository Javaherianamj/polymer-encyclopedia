import React, { useState } from 'react';
import { PolymerData } from '../types/polymer';

interface ProcessingWindowSimulatorProps {
  polymer: PolymerData;
}

interface StandardSpec {
  id: string;
  nameFa: string;
  code: string;
  description: string;
  meltTempRange: [number, number]; // [min, max] °C
  moldTempRange: [number, number]; // [min, max] °C
  pressureRange: [number, number]; // [min, max] bar
  dryingReq: string;
}

export const ProcessingWindowSimulator: React.FC<ProcessingWindowSimulatorProps> = ({ polymer }) => {
  // Define standard benchmarks based on international ISO/ASTM standards & CAMPUS plastics database
  const standards: StandardSpec[] = [
    {
      id: 'iso294',
      nameFa: 'تزریق پلاستیک قطعات آزمایشی (ISO 294-1)',
      code: 'ISO 294-1 / ISO 3167',
      description: 'استاندارد مرجع بین‌المللی برای آماده‌سازی نمونه‌های آزمایشی کشش و ضربه تحت شرایط کنترل‌شده.',
      meltTempRange: polymer.id === 'ldpe' ? [180, 230] :
                      polymer.id === 'hdpe' ? [200, 260] :
                      polymer.id === 'pp' ? [200, 270] :
                      polymer.id === 'ps' ? [180, 250] :
                      polymer.id === 'abs' ? [220, 260] :
                      polymer.id === 'pvc' ? [170, 205] : [220, 280],
      moldTempRange: polymer.id === 'ldpe' ? [20, 50] :
                      polymer.id === 'hdpe' ? [30, 70] :
                      polymer.id === 'pp' ? [20, 60] :
                      polymer.id === 'ps' ? [20, 60] :
                      polymer.id === 'abs' ? [40, 80] :
                      polymer.id === 'pvc' ? [20, 50] : [50, 90],
      pressureRange: [600, 1200],
      dryingReq: polymer.id === 'abs' ? '80°C برای 2 تا 4 ساعت' : 'نیازی به رطوبت‌زدایی شدید ندارد (کمتر از 0.1٪)',
    },
    {
      id: 'iso2045',
      nameFa: 'اکستروژن فیلم و لوله (ISO 2045 / ASTM D1238)',
      code: 'ISO 2045 / ASTM D1238',
      description: 'استاندارد فرآیندپذیری در مادی‌های اکسترودری پپ، پلی‌اتیلن و پی‌وی‌سی بر اساس شاخص MFI.',
      meltTempRange: polymer.id === 'ldpe' ? [160, 210] :
                      polymer.id === 'hdpe' ? [180, 230] :
                      polymer.id === 'pp' ? [190, 240] :
                      polymer.id === 'ps' ? [170, 220] :
                      polymer.id === 'abs' ? [200, 240] :
                      polymer.id === 'pvc' ? [160, 190] : [200, 250],
      moldTempRange: [15, 40],
      pressureRange: [150, 450],
      dryingReq: 'کنترل رطوبت ورودی خوراک کمتر از 0.05٪ mass fraction',
    },
    {
      id: 'campus',
      nameFa: 'پایگاه داده مهندسی مواد پلیمری CAMPUS',
      code: 'CAMPUS Plastics DB / ISO 10350',
      description: 'داده‌های مرجع واحدهای پتروشیمی جهانی شامل BASF، Sabic، Covestro و Borealis.',
      meltTempRange: polymer.id === 'ldpe' ? [170, 220] :
                      polymer.id === 'hdpe' ? [190, 250] :
                      polymer.id === 'pp' ? [210, 260] :
                      polymer.id === 'ps' ? [190, 240] :
                      polymer.id === 'abs' ? [210, 270] :
                      polymer.id === 'pvc' ? [165, 195] : [210, 275],
      moldTempRange: polymer.id === 'ldpe' ? [25, 45] :
                      polymer.id === 'hdpe' ? [35, 65] :
                      polymer.id === 'pp' ? [25, 55] :
                      polymer.id === 'ps' ? [30, 60] :
                      polymer.id === 'abs' ? [45, 75] :
                      polymer.id === 'pvc' ? [25, 45] : [40, 80],
      pressureRange: [500, 1100],
      dryingReq: polymer.id === 'abs' ? '80-85°C در رطوبت‌گیر دهیدراته' : 'خشک‌سازی اولیه در صورت نگهداری در انبار مرطوب',
    }
  ];

  const [selectedStdId, setSelectedStdId] = useState<string>('iso294');
  const activeStd = standards.find((s) => s.id === selectedStdId) || standards[0];

  // Midpoint initial values
  const [meltTemp, setMeltTemp] = useState<number>(Math.round((activeStd.meltTempRange[0] + activeStd.meltTempRange[1]) / 2));
  const [moldTemp, setMoldTemp] = useState<number>(Math.round((activeStd.moldTempRange[0] + activeStd.moldTempRange[1]) / 2));
  const [pressure, setPressure] = useState<number>(Math.round((activeStd.pressureRange[0] + activeStd.pressureRange[1]) / 2));

  // Determine status & defects
  const isMeltTooLow = meltTemp < activeStd.meltTempRange[0];
  const isMeltTooHigh = meltTemp > activeStd.meltTempRange[1];
  const isMoldTooLow = moldTemp < activeStd.moldTempRange[0];
  const isMoldTooHigh = moldTemp > activeStd.moldTempRange[1];

  let statusMessage = 'پنجره فرآیند مطلوب (Optimal Processing Window)';
  let statusColor = 'emerald';
  const defects: string[] = [];

  if (isMeltTooLow) {
    defects.push('خطر ذوب ناقص و حضور گلهای ذوب‌نشده (Unmelted Gels)');
    defects.push('افزایش شدید گرانروی و فشار پشت نازل (High Injection Pressure drop)');
  }
  if (isMeltTooHigh) {
    defects.push('تخریب حرارتی زنجیرها و ایجاد گاز/تغییر رنگ (Thermal Degradation / Discoloration)');
    defects.push('افزایش زمان خنک‌کاری و سیکل تولید (Longer Cycle Time)');
  }
  if (isMoldTooLow) {
    defects.push('ایجاد تنش‌های پسماند شدید و خطوط جوش ضعیف (High Residual Stresses / Weak Weld Lines)');
    defects.push('کاهش درصد بلورینگی و افت خواص مکانیکی نهایی');
  }
  if (isMoldTooHigh) {
    defects.push('خطر انقباض ناهمگن و تاب‌دیدگی قطعه (Excessive Warpage & Shrinkage)');
    defects.push('چسبندگی قطعه به قالب و سختی در پران (Ejection Difficulty)');
  }

  if (defects.length > 0) {
    statusColor = isMeltTooHigh ? 'rose' : 'amber';
    statusMessage = 'خارج از محدوده استاندارد (Risk of Quality Defect)';
  }

  return (
    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-sm mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            <span>⚙️</span>
            <span>شبیه‌ساز پنجره فرآیند شکل‌دهی (Processing Window Simulator)</span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            مستند به استانداردهای بین‌المللی ISO و پایگاه داده‌های معتبر مهندسی پلیمر
          </p>
        </div>

        {/* Standard Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-600 dark:text-slate-300 whitespace-nowrap">
            مرجع استاندارد:
          </label>
          <select
            value={selectedStdId}
            onChange={(e) => {
              setSelectedStdId(e.target.value);
              const newStd = standards.find((s) => s.id === e.target.value) || standards[0];
              setMeltTemp(Math.round((newStd.meltTempRange[0] + newStd.meltTempRange[1]) / 2));
              setMoldTemp(Math.round((newStd.moldTempRange[0] + newStd.moldTempRange[1]) / 2));
              setPressure(Math.round((newStd.pressureRange[0] + newStd.pressureRange[1]) / 2));
            }}
            className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 px-3 py-1.5 rounded-xl outline-none focus:border-blue-600 cursor-pointer"
          >
            {standards.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nameFa}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Standard Info Banner */}
      <div className="bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 p-3.5 rounded-xl text-xs text-slate-700 dark:text-slate-300 mb-5 flex items-start gap-2.5">
        <span className="text-base">📜</span>
        <div>
          <span className="font-extrabold text-blue-700 dark:text-blue-300 en-mono ml-1">
            [{activeStd.code}]
          </span>
          <span>{activeStd.description}</span>
          <div className="mt-1 font-semibold text-slate-600 dark:text-slate-400">
            شرایط رطوبت‌زدایی پیش‌فرض: <span className="en-mono text-slate-800 dark:text-slate-200">{activeStd.dryingReq}</span>
          </div>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Melt Temperature Slider */}
        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-4 rounded-xl">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-slate-700 dark:text-slate-300">دمای مذاب (Melt Temp):</span>
            <span className="en-mono font-black text-blue-600 dark:text-blue-400 text-sm">{meltTemp}°C</span>
          </div>
          <input
            type="range"
            min={activeStd.meltTempRange[0] - 40}
            max={activeStd.meltTempRange[1] + 40}
            value={meltTemp}
            onChange={(e) => setMeltTemp(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 dir-ltr mt-1">
            <span>Min: {activeStd.meltTempRange[0]}°C</span>
            <span>Max: {activeStd.meltTempRange[1]}°C</span>
          </div>
        </div>

        {/* Mold Temperature Slider */}
        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-4 rounded-xl">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-slate-700 dark:text-slate-300">دمای قالب (Mold Temp):</span>
            <span className="en-mono font-black text-emerald-600 dark:text-emerald-400 text-sm">{moldTemp}°C</span>
          </div>
          <input
            type="range"
            min={Math.max(10, activeStd.moldTempRange[0] - 20)}
            max={activeStd.moldTempRange[1] + 30}
            value={moldTemp}
            onChange={(e) => setMoldTemp(Number(e.target.value))}
            className="w-full accent-emerald-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 dir-ltr mt-1">
            <span>Min: {activeStd.moldTempRange[0]}°C</span>
            <span>Max: {activeStd.moldTempRange[1]}°C</span>
          </div>
        </div>

        {/* Injection Pressure Slider */}
        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-4 rounded-xl">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-slate-700 dark:text-slate-300">فشار تزریق/اکستروژن:</span>
            <span className="en-mono font-black text-purple-600 dark:text-purple-400 text-sm">{pressure} bar</span>
          </div>
          <input
            type="range"
            min={activeStd.pressureRange[0] - 200}
            max={activeStd.pressureRange[1] + 300}
            value={pressure}
            onChange={(e) => setPressure(Number(e.target.value))}
            className="w-full accent-purple-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 dir-ltr mt-1">
            <span>Min: {activeStd.pressureRange[0]} bar</span>
            <span>Max: {activeStd.pressureRange[1]} bar</span>
          </div>
        </div>
      </div>

      {/* Live Status & Defect Diagnosis Card */}
      <div
        className={`border p-4 rounded-xl transition-all ${
          statusColor === 'emerald'
            ? 'bg-emerald-50/80 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800'
            : statusColor === 'amber'
            ? 'bg-amber-50/80 dark:bg-amber-950/50 border-amber-300 dark:border-amber-800'
            : 'bg-rose-50/80 dark:bg-rose-950/50 border-rose-300 dark:border-rose-800'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">
              {statusColor === 'emerald' ? '✅' : statusColor === 'amber' ? '⚠️' : '🚨'}
            </span>
            <span
              className={`text-sm font-extrabold ${
                statusColor === 'emerald'
                  ? 'text-emerald-800 dark:text-emerald-300'
                  : statusColor === 'amber'
                  ? 'text-amber-800 dark:text-amber-300'
                  : 'text-rose-800 dark:text-rose-300'
              }`}
            >
              وضعیت فرآیند: {statusMessage}
            </span>
          </div>
          <span className="text-xs en-mono font-bold opacity-80">Standard Check</span>
        </div>

        {defects.length === 0 ? (
          <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed font-semibold">
            تنظیمات پارامترهای دمایی و فشاری دقیقاً در مرکز پنجره شکل‌دهی استاندارد قرار دارد. قطعه تزریقی/اکسترودی دارای انقباض یکنواخت، حداقل تنش پسماند و ساختار بلورینگی ایده‌آل خواهد بود.
          </p>
        ) : (
          <div className="space-y-1 mt-2">
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">عیوب عینی پیش‌بینی‌شده در قطعه:</div>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
              {defects.map((d, idx) => (
                <li key={idx} className="leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
