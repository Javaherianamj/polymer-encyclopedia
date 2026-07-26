import React, { useState } from 'react';
import { PolymerData } from '../types/polymer';

interface BranchingSimulatorProps {
  polymer: PolymerData;
}

export const BranchingSimulator: React.FC<BranchingSimulatorProps> = ({ polymer }) => {
  // Branch count slider (number of long/short branches attached to main chain)
  const [numBranches, setNumBranches] = useState<number>(12);

  // Dynamic property calculations for LDPE based on branch count
  const calcCrystallinity = Math.max(35, Math.min(65, Math.round(65 - numBranches * 1.2)));
  const calcDensity = (0.938 - (numBranches / 25) * 0.025).toFixed(3);
  const calcYieldStrength = Math.round(22 - (numBranches / 25) * 10);
  const calcTransparency = Math.round(40 + (numBranches / 25) * 50);

  return (
    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 my-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 pb-3 border-b border-slate-100 dark:border-slate-700/60">
        <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
          <span className="text-2xl">🔀</span>
          <span>شبیه‌ساز اختصاصی شاخه‌داری زنجیر LDPE (Branching Engine)</span>
        </h3>
        <span className="en-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
          تعداد شاخه‌های اتیل/بوتیل و بلند
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
        پلی‌اتیلن سبک (LDPE) به علت فرآیند پلیمریزاسیون رادیکالی فشار بالا دارای شاخه‌های بلند و کوتاه فراوان است. با تغییر تعداد شاخه‌ها، تغییرات تراکم، درصد بلورینگی و چگالی LDPE را مشاهده کنید:
      </p>

      {/* Interactive Visual Canvas Box */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5 shadow-inner">
        <div className="flex justify-between items-center text-xs text-slate-300 mb-2">
          <span className="font-bold">موفولوژی زنجیر اصلی با شاخه‌های جانبی:</span>
          <span className="en-mono text-emerald-400 font-bold">
            {numBranches < 5 ? 'شاخه‌داری کم (نزدیک به خطی)' : numBranches > 18 ? 'شاخه‌داری بسیار شدید' : 'شاخه‌داری استاندارد LDPE'}
          </span>
        </div>

        <svg className="w-full h-[150px]" viewBox="0 0 600 150">
          {/* Main Backbone Chain */}
          <path d="M 30,75 L 570,75" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />

          {/* Render Branches based on numBranches */}
          {Array.from({ length: numBranches }).map((_, idx) => {
            const x = 50 + (idx * (500 / Math.max(1, numBranches - 1)));
            const isTop = idx % 2 === 0;
            const branchLen = 25 + (idx % 3) * 10;
            const y2 = isTop ? 75 - branchLen : 75 + branchLen;

            return (
              <g key={idx}>
                {/* Branch line */}
                <line x1={x} y1={75} x2={x + (isTop ? 10 : -10)} y2={y2} stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
                {/* Sub-branch for longer branches */}
                {idx % 3 === 0 && (
                  <line
                    x1={x + (isTop ? 10 : -10)}
                    y1={y2}
                    x2={x + (isTop ? 25 : -25)}
                    y2={isTop ? y2 - 15 : y2 + 15}
                    stroke="#ef4444"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                )}
                {/* Branch tip dot */}
                <circle cx={x + (isTop ? 10 : -10)} cy={y2} r="4" fill="#f59e0b" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Slider & Dynamic Properties */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
              تعداد شاخه‌های جانبی در طول زنجیر:
            </label>
            <span className="en-mono text-base font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-3 py-0.5 rounded-lg border border-blue-200 dark:border-blue-800">
              {numBranches} Branches
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="25"
            step="1"
            value={numBranches}
            onChange={(e) => setNumBranches(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        {/* Dynamic Property Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-xl">
            <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">درصد بلورینگی</div>
            <div className="en-mono text-lg font-black text-blue-600 dark:text-blue-400">{calcCrystallinity} %</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-xl">
            <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">چگالی محاسباتی</div>
            <div className="en-mono text-lg font-black text-emerald-600 dark:text-emerald-400">{calcDensity} g/cm³</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-xl">
            <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">استحکام تسلیم</div>
            <div className="en-mono text-lg font-black text-amber-600 dark:text-amber-400">{calcYieldStrength} MPa</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-xl">
            <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">شفافیت نوری فیلم</div>
            <div className="en-mono text-lg font-black text-sky-600 dark:text-sky-400">{calcTransparency} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};
