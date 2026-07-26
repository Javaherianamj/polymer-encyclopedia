import React, { useState } from 'react';
import { PolymerData } from '../types/polymer';

interface StateSimulatorProps {
  polymer: PolymerData;
}

export const StateSimulator: React.FC<StateSimulatorProps> = ({ polymer }) => {
  // Dynamically calculate temperature bounds based on polymer's thermal properties
  const tg = polymer.thermal.tgValue;
  const tm = polymer.thermal.tmValue;
  const td = polymer.thermal.degradationValue || 350;

  // Dynamic minimum and maximum temperature scale
  const minTemp = Math.min(-150, Math.floor(tg - 60));
  const maxTemp = Math.max(450, Math.ceil(td + 80));

  // Default initial temperature to room temperature or Tg + 30
  const [temp, setTemp] = useState<number>(25);

  // Fill percentage calculation
  const percentage = Math.min(100, Math.max(0, ((temp - minTemp) / (maxTemp - minTemp)) * 100));

  let stateTitle = '';
  let stateDesc = '';
  let color = '#3b82f6';
  let badgeColor = 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30';

  if (temp < tg) {
    stateTitle = '❄️ حالت شیشه‌ای و صلب (Glassy State)';
    stateDesc = `پلیمر پایین‌تر از دمای انتقال شیشه‌ای (Tg = ${polymer.thermal.tg}) قرار دارد. ارتعاشات حرارتی زنجیرها ناچیز بوده، بخش‌های آمورف منجمد شده و ماده رفتار صلب، سخت و شکننده نشان می‌دهد.`;
    color = '#0284c7'; // cold sky blue
    badgeColor = 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30';
  } else if (temp >= tg && temp < tm) {
    stateTitle = '🌿 حالت نیمه‌بلوری / لاستیکی (Semi-Crystalline / Rubbery State)';
    stateDesc = `زنجیرهای پلیمری در مناطق آمورف انرژی کافی برای چرخش بخش‌ها (Segmental Motion) به دست آورده‌اند، اما بلورها (با درصد بلورینگی ${polymer.academic.crystallinityRange}) پایداری مکانیکی ماده را حفظ کرده‌اند. این محدوده کاربری اصلی ${polymer.code} در صنایع مختلف است.`;
    color = '#10b981'; // vibrant emerald green
    badgeColor = 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
  } else if (temp >= tm && temp < td) {
    stateTitle = '🔥 حالت مذاب سیال (Melt / Viscous Flow State)';
    stateDesc = `دمای نمونه از نقطه ذوب بلوری (Tm = ${polymer.thermal.tm}) عبور کرده است. کریستال‌ها کاملاً باز شده و سیال ویسکوالاستیک تشکیل داده‌اند که آماده فرآیندهای شکل‌دهی اکستروژن، قالب‌گیری تزریقی و دمشی است.`;
    color = '#f59e0b'; // amber melt
    badgeColor = 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30';
  } else {
    stateTitle = '☠️ تخریب حرارتی و شکست پیوندها (Thermal Degradation)';
    stateDesc = `دما از آستانه تخریب حرارتی (Td = ${polymer.thermal.degradationTemp}) فراتر رفته است! انرژی گرمایی از انرژی پیوندهای سیگما (C-C و C-H) فراتر رفته، زنجیرها دچار شکستگی (Scission)، دپلیمریزاسیون و سقوط شدید وزن مولکولی می‌شوند.`;
    color = '#ef4444'; // red danger
    badgeColor = 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30';
  }

  // Calculate position percentages for Tg, Tm, Td markers on slider
  const tgPos = Math.min(100, Math.max(0, ((tg - minTemp) / (maxTemp - minTemp)) * 100));
  const tmPos = Math.min(100, Math.max(0, ((tm - minTemp) / (maxTemp - minTemp)) * 100));
  const tdPos = Math.min(100, Math.max(0, ((td - minTemp) / (maxTemp - minTemp)) * 100));

  return (
    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 my-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 pb-3 border-b border-slate-100 dark:border-slate-700/50">
        <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
          <span className="text-2xl">🌡️</span>
          <span>نمودار دینامیکی حالت فیزیکی در برابر دما (State Simulator)</span>
        </h3>
        <span className="en-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          بازه پویا: {minTemp}°C تا {maxTemp}°C
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        با حرکت دادن لغزنده، دمای نمونه را از زیر انتقال شیشه‌ای تا تخریب حرارتی تغییر دهید. بازه دما به صورت خودکار بر اساس آستانه حرارتی {polymer.code} تنظیم شده است:
      </p>

      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {/* Thermometer Tube Graphic */}
        <div className="flex flex-col items-center justify-between bg-slate-100 dark:bg-slate-900/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-700/60 w-full md:w-24 flex-shrink-0">
          <div className="text-[11px] font-bold text-slate-400 en-mono">{maxTemp}°C</div>
          
          <div className="w-8 h-48 bg-slate-200 dark:bg-slate-800 rounded-full relative overflow-hidden my-2 border border-slate-300 dark:border-slate-700 shadow-inner">
            <div
              className="w-full absolute bottom-0 transition-all duration-200 ease-out rounded-b-full"
              style={{ height: `${percentage}%`, backgroundColor: color }}
            />
          </div>

          <div className="text-[11px] font-bold text-slate-400 en-mono">{minTemp}°C</div>
        </div>

        {/* Controls & State Explanations */}
        <div className="flex-1 w-full space-y-5">
          {/* Slider input & markers */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span>تنظیم دمای نمونه:</span>
                <span className="en-mono text-xl font-extrabold px-3 py-0.5 rounded-lg border shadow-xs transition-colors" style={{ color, borderColor: color }}>
                  {temp} °C
                </span>
              </label>
              <button
                onClick={() => setTemp(25)}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold cursor-pointer"
              >
                بازنشانی به دمای محیط (25°C)
              </button>
            </div>

            <div dir="ltr" className="relative pt-2 pb-6">
              <input
                type="range"
                min={minTemp}
                max={maxTemp}
                step="2"
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              {/* Phase transition tick marks */}
              <div className="relative w-full h-5 mt-1.5 text-[10px] en-mono font-bold text-slate-400">
                <span
                  className="absolute -translate-x-1/2 flex flex-col items-center cursor-pointer hover:text-sky-500 transition-colors"
                  style={{ left: `${tgPos}%` }}
                  onClick={() => setTemp(tg)}
                  title={`Tg = ${tg}°C`}
                >
                  <span className="w-1.5 h-2.5 bg-sky-500 rounded-full mb-0.5" />
                  <span className="whitespace-nowrap font-extrabold text-sky-600 dark:text-sky-400">Tg ({tg}°C)</span>
                </span>

                <span
                  className="absolute -translate-x-1/2 flex flex-col items-center cursor-pointer hover:text-emerald-500 transition-colors"
                  style={{ left: `${tmPos}%` }}
                  onClick={() => setTemp(tm)}
                  title={`Tm = ${tm}°C`}
                >
                  <span className="w-1.5 h-2.5 bg-emerald-500 rounded-full mb-0.5" />
                  <span className="whitespace-nowrap font-extrabold text-emerald-600 dark:text-emerald-400">Tm ({tm}°C)</span>
                </span>

                <span
                  className="absolute -translate-x-1/2 flex flex-col items-center cursor-pointer hover:text-rose-500 transition-colors"
                  style={{ left: `${tdPos}%` }}
                  onClick={() => setTemp(td)}
                  title={`Td = ${td}°C`}
                >
                  <span className="w-1.5 h-2.5 bg-rose-500 rounded-full mb-0.5" />
                  <span className="whitespace-nowrap font-extrabold text-rose-600 dark:text-rose-400">Td ({td}°C)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Key Thermal Thresholds Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setTemp(tg - 20)}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-all text-right cursor-pointer group"
            >
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">انتقال شیشه‌ای (Tg)</div>
              <div className="en-mono font-black text-sm text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform">{polymer.thermal.tg}</div>
            </button>

            <button
              onClick={() => setTemp(tm + 10)}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-all text-right cursor-pointer group"
            >
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">نقطه ذوب بلوری (Tm)</div>
              <div className="en-mono font-black text-sm text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">{polymer.thermal.tm}</div>
            </button>

            <button
              onClick={() => setTemp(td + 20)}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-all text-right cursor-pointer group"
            >
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">تخریب حرارتی (Td)</div>
              <div className="en-mono font-black text-sm text-rose-600 dark:text-rose-400 group-hover:scale-105 transition-transform">{polymer.thermal.degradationTemp}</div>
            </button>
          </div>

          {/* Active Phase Box */}
          <div className={`p-4 rounded-xl border ${badgeColor} transition-all shadow-xs`}>
            <div className="text-xs font-extrabold uppercase tracking-wider mb-1 opacity-80">فاز و وضعیت فیزیکی ماده:</div>
            <div className="font-extrabold text-base sm:text-lg mb-2" style={{ color }}>
              {stateTitle}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
              {stateDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
