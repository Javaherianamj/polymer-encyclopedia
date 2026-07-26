import React from 'react';

interface ResinBadgeProps {
  resinCode: number;
  code: string;
  compact?: boolean;
}

export const ResinBadge: React.FC<ResinBadgeProps> = ({ resinCode, code, compact = false }) => {
  const ricAbbrMap: Record<number, string> = {
    1: 'PETE',
    2: 'HDPE',
    3: 'V',
    4: 'LDPE',
    5: 'PP',
    6: 'PS',
    7: 'OTHER'
  };

  const abbr = ricAbbrMap[resinCode] || code;

  if (compact) {
    return (
      <div
        className="inline-flex items-center gap-2 bg-emerald-50/80 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 px-2.5 py-1 rounded-xl text-xs font-bold text-emerald-800 dark:text-emerald-300 shadow-xs"
        title={`کد بازیافت رزین ${resinCode} (${abbr})`}
      >
        <div className="w-5 h-5 flex-shrink-0">
          <svg className="w-full h-full text-emerald-600 dark:text-emerald-400" viewBox="0 0 100 100" fill="none">
            <path d="M 22 75 L 42 25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <polygon points="34,22 48,14 46,29" fill="currentColor" />
            <path d="M 58 25 L 78 75" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <polygon points="72,66 86,78 72,82" fill="currentColor" />
            <path d="M 78 81 L 22 81" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <polygon points="28,73 14,78 28,88" fill="currentColor" />
            <text x="50" y="56" textAnchor="middle" dominantBaseline="central" className="en-mono font-black text-2xl fill-slate-900 dark:fill-white">
              {resinCode}
            </text>
          </svg>
        </div>
        <span className="en-mono text-xs font-black">
          #{resinCode} ({abbr})
        </span>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 shadow-sm hover:border-emerald-500/60 transition-all hover:scale-105 group"
      title={`کد بازیافت رزین ${resinCode} (${abbr}) طبق استاندارد ASTM D7611 / ISO 11469`}
    >
      {/* Official RIC Mobius Chasing Arrows Triangle Icon */}
      <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
        <svg
          className="w-full h-full text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors"
          viewBox="0 0 100 100"
          fill="none"
        >
          {/* Arrow 1: Left going up to Top */}
          <path d="M 22 75 L 42 25" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
          <polygon points="34,22 48,14 46,29" fill="currentColor" />

          {/* Arrow 2: Top going down to Bottom-Right */}
          <path d="M 58 25 L 78 75" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
          <polygon points="72,66 86,78 72,82" fill="currentColor" />

          {/* Arrow 3: Bottom-Right going left to Bottom-Left */}
          <path d="M 78 81 L 22 81" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
          <polygon points="28,73 14,78 28,88" fill="currentColor" />

          {/* Centered Recycling Number inside centroid of triangle */}
          <text
            x="50"
            y="56"
            textAnchor="middle"
            dominantBaseline="central"
            className="en-mono font-black text-xl fill-slate-900 dark:fill-white"
          >
            {resinCode}
          </text>
        </svg>
      </div>

      <div className="flex flex-col text-right">
        <span className="text-[10px] text-slate-400 dark:text-slate-400 font-semibold leading-tight">کد بازیافت رزین</span>
        <span className="en-mono text-xs font-black text-emerald-600 dark:text-emerald-400 leading-tight">
          Resin #{resinCode} ({abbr})
        </span>
      </div>
    </div>
  );
};
