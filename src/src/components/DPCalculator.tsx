import React, { useState } from 'react';
import { PolymerData } from '../types/polymer';

interface DPCalculatorProps {
  polymer: PolymerData;
}

export const DPCalculator: React.FC<DPCalculatorProps> = ({ polymer }) => {
  const [mnInput, setMnInput] = useState<number>(polymer.academic.mnDefaultValue);

  const m0 = polymer.academic.monomerMolarMass;
  const dp = mnInput > 0 ? Math.round(mnInput / m0) : 0;

  return (
    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 border-t-4 border-t-blue-600 dark:border-t-blue-500 rounded-2xl p-6 my-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white mb-2">
        <span>🧮</span>
        <span>محاسبه‌گر علمی درجه پلیمریزاسیون (Degree of Polymerization Calculator)</span>
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
        درجه پلیمریزاسیون (<span className="en-mono font-bold text-blue-600 dark:text-blue-400">DP<sub>n</sub></span>) نشان‌دهنده میانگین تعداد واحدهای تکرارشونده در یک زنجیر پلیمری است و طبق رابطه ریاضی زیر محاسبه می‌شود:
      </p>

      {/* Beautiful Visual Fraction Formula */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-5 rounded-2xl text-center my-4 shadow-inner">
        <div className="flex items-center justify-center gap-3.5 text-xl font-extrabold text-slate-900 dark:text-white en-mono">
          <div className="flex items-center text-blue-600 dark:text-blue-400 leading-none">
            <span className="text-2xl font-black">DP</span>
            <span className="text-xs font-bold text-blue-500 dark:text-blue-300 translate-y-1.5 -ml-0.5">n</span>
          </div>
          <span className="text-slate-500 dark:text-slate-400 font-bold text-xl leading-none">=</span>
          <div className="inline-flex flex-col items-center justify-center min-w-[70px]">
            <div className="px-3 py-0.5 text-blue-600 dark:text-blue-400 font-extrabold text-lg leading-none flex items-center">
              M<span className="text-xs text-blue-500 dark:text-blue-300 translate-y-1">n</span>
            </div>
            <div className="w-full h-0.5 bg-slate-700 dark:bg-slate-300 my-1 rounded-full" />
            <div className="px-3 py-0.5 text-emerald-600 dark:text-emerald-400 font-extrabold text-lg leading-none flex items-center">
              M<span className="text-xs text-emerald-500 dark:text-emerald-300 translate-y-1">0</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
          جرم مولی واحد تکرارشونده (<span className="en-mono font-bold">{polymer.academic.monomerName}</span>):{' '}
          <span className="en-mono font-bold text-emerald-600 dark:text-emerald-400">M<sub>0</sub> = {m0} g/mol</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            وزن مولکولی عددی میانگین (M<sub>n</sub> بر حسب g/mol):
          </label>
          <input
            type="number"
            value={mnInput}
            onChange={(e) => setMnInput(Number(e.target.value))}
            placeholder={`مثال: ${polymer.academic.mnDefaultValue}`}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-2.5 rounded-xl en-mono font-bold focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all shadow-xs"
          />
        </div>

        <div className="bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 p-4 rounded-xl min-w-[180px] text-center shadow-xs">
          <div className="text-xs font-bold text-slate-600 dark:text-slate-300">
            درجه پلیمریزاسیون (DP<sub>n</sub>)
          </div>
          <div className="en-mono text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
            DP<sub>n</sub> ≈ {dp.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};
