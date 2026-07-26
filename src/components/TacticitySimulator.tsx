import React, { useState } from 'react';
import { PolymerData } from '../types/polymer';

interface TacticitySimulatorProps {
  polymer: PolymerData;
}

export const TacticitySimulator: React.FC<TacticitySimulatorProps> = ({ polymer }) => {
  // 8 monomer units sequence: 1 = UP (side A), -1 = DOWN (side B)
  const [rings, setRings] = useState<number[]>([1, 1, -1, 1, -1, -1, 1, -1]); // Default Atactic
  const [mode, setMode] = useState<'atactic' | 'isotactic' | 'syndiotactic'>('atactic');

  // Set preset tacticity sequences
  const handleSetPreset = (presetMode: 'atactic' | 'isotactic' | 'syndiotactic') => {
    setMode(presetMode);
    if (presetMode === 'isotactic') {
      setRings([1, 1, 1, 1, 1, 1, 1, 1]);
    } else if (presetMode === 'syndiotactic') {
      setRings([1, -1, 1, -1, 1, -1, 1, -1]);
    } else {
      // Atactic random sequence
      setRings([1, 1, -1, 1, -1, -1, 1, -1]);
    }
  };

  // Toggle individual ring position manually
  const toggleRing = (index: number) => {
    const updated = [...rings];
    updated[index] = updated[index] === 1 ? -1 : 1;
    setRings(updated);

    // Determine current mode based on sequence
    const isIso = updated.every((val) => val === updated[0]);
    const isSyndio = updated.every((val, idx) => idx % 2 === 0 ? val === updated[0] : val === -updated[0]);

    if (isIso) setMode('isotactic');
    else if (isSyndio) setMode('syndiotactic');
    else setMode('atactic');
  };

  // Dynamic status evaluation
  const isIsotactic = rings.every((val) => val === rings[0]);
  const isSyndiotactic = rings.every((val, idx) => idx % 2 === 0 ? val === rings[0] : val === -rings[0]);

  const crystallinity = isSyndiotactic ? '40 - 50 % (بلوری بالا)' : isIsotactic ? '30 - 40 % (نیمه‌بلوری)' : '0 % (کاملاً آمورف)';
  const tmValue = isSyndiotactic ? '270 °C' : isIsotactic ? '240 °C' : 'ندارد (فاقد ذوب بلوری)';
  const appearance = isSyndiotactic ? 'کدر / سفیدبلوری' : isIsotactic ? 'نیمه‌شفاف' : 'کاملاً شفاف و کریستالی (GPPS)';
  const commercialName = isSyndiotactic ? 'sPS (سنتز کاتالیزوری متالوسن)' : isIsotactic ? 'iPS (کاتالیزور زیگلر-ناتا)' : 'aPS / GPPS (پلی‌استایرن تجاری)';

  return (
    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 my-6 shadow-sm hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 pb-3 border-b border-slate-100 dark:border-slate-700/60">
        <h3 className="text-xl font-black flex items-center gap-2.5 text-slate-900 dark:text-white">
          <span className="p-2 bg-indigo-500/10 text-indigo-500 rounded-xl text-lg">⚛️</span>
          <span>شبیه‌ساز آرایش فضایی و تاکتیسیته (Polystyrene Tacticity Engine)</span>
        </h3>
        <span className="en-mono text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
          تأثیر نظم فنیل بر بلورینگی
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
        تاکتیسیته (Tacticity) نحوه قرارگیری فضایی حلقه‌های بنزنی (فنیل) نسبت به صفحه اصلی زنجیر پلی‌استایرن را مشخص می‌کند. حالت‌های مختلف را انتخاب کنید یا <span className="font-bold text-indigo-600 dark:text-indigo-400">روی حلقه‌های بنزنی کلیک کنید</span> تا جایگاه آن‌ها را به صورت دستی تغییر دهید:
      </p>

      {/* Tacticity Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => handleSetPreset('atactic')}
          className={`p-4 rounded-xl border text-right transition-all cursor-pointer ${
            mode === 'atactic'
              ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 text-amber-950 dark:text-amber-100 shadow-xs'
              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-400'
          }`}
        >
          <div className="font-extrabold text-sm mb-1 flex justify-between items-center">
            <span>🎲 آتاکتیک (Atactic PS)</span>
            <span className="en-mono text-[10px] bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded">نامنظم</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
            حلقه‌ها کاملاً تصادفی بالا و پایین هستند. عدم توانایی در بسته‌بندی بلوری ⇐ پلی‌استایرن عمومی شفاف (GPPS).
          </p>
        </button>

        <button
          onClick={() => handleSetPreset('isotactic')}
          className={`p-4 rounded-xl border text-right transition-all cursor-pointer ${
            mode === 'isotactic'
              ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-950 dark:text-blue-100 shadow-xs'
              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400'
          }`}
        >
          <div className="font-extrabold text-sm mb-1 flex justify-between items-center">
            <span>در یک جهت (Isotactic PS)</span>
            <span className="en-mono text-[10px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded">هم‌جهت</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
            همه حلقه‌های فنیل در یک سمت صفحه زنجیر قرار دارند. قابلیت تشکیل بلور با سرعت پایین و Tm حدود 240 °C.
          </p>
        </button>

        <button
          onClick={() => handleSetPreset('syndiotactic')}
          className={`p-4 rounded-xl border text-right transition-all cursor-pointer ${
            mode === 'syndiotactic'
              ? 'bg-purple-50 dark:bg-purple-950/50 border-purple-500 text-purple-950 dark:text-purple-100 shadow-xs'
              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-400'
          }`}
        >
          <div className="font-extrabold text-sm mb-1 flex justify-between items-center">
            <span>⚡ سیندیوتاکتیک (Syndiotactic PS)</span>
            <span className="en-mono text-[10px] bg-purple-600 text-white font-bold px-2 py-0.5 rounded">یکی درمیان</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
            حلقه‌ها به صورت منظم یکی در میان بالا و پایین می‌باشند. بلورینگی بسیار سریع، مقاومت حرارتی بالا (Tm = 270 °C).
          </p>
        </button>
      </div>

      {/* Interactive Interactive Polymer Chain Visualization */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-5 shadow-inner">
        <div className="flex justify-between items-center text-xs text-slate-300 mb-3">
          <span className="font-bold flex items-center gap-1.5">
            <span>🔬 آرایش فضایی زنجیر اصلی و حلقه‌های فنیل:</span>
            <span className="text-[11px] text-indigo-400">(جهت جابه‌جایی، روی حلقه‌ها کلیک کنید)</span>
          </span>
          <span className="en-mono text-emerald-400 font-extrabold">
            {commercialName}
          </span>
        </div>

        {/* Interactive Chain SVG */}
        <div className="overflow-x-auto py-2">
          <svg className="w-full min-w-[650px] h-[180px]" viewBox="0 0 650 180">
            {/* Main Carbon Backbone Zig-Zag line */}
            <path
              d="M 25,90 L 95,90 L 165,90 L 235,90 L 305,90 L 375,90 L 445,90 L 515,90 L 585,90 L 625,90"
              stroke="#64748b"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Repeating Monomer Carbon Nodes */}
            {rings.map((direction, idx) => {
              const cx = 95 + idx * 70;
              const cy = 90;
              const ringY = direction === 1 ? 38 : 142; // Up or Down
              const lineY2 = direction === 1 ? 55 : 125;

              return (
                <g key={idx} onClick={() => toggleRing(idx)} className="cursor-pointer group">
                  {/* Connection bond to Phenyl Ring */}
                  <line
                    x1={cx}
                    y1={cy}
                    x2={cx}
                    y2={lineY2}
                    stroke={direction === 1 ? '#38bdf8' : '#a855f7'}
                    strokeWidth="3.5"
                    strokeDasharray={direction === -1 ? '4 2' : 'none'}
                  />

                  {/* Carbon Backbone Sphere Node */}
                  <circle cx={cx} cy={cy} r="10" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                  <text x={cx} y={cy + 4} textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                    CH
                  </text>

                  {/* Benzene Ring (Interactive Clickable Polygon) */}
                  <g className="transition-transform duration-300 group-hover:scale-110" transform={`translate(${cx}, ${ringY})`}>
                    {/* Outer hexagon glow */}
                    <polygon
                      points="0,-18 15,-9 15,9 0,18 -15,9 -15,-9"
                      fill={direction === 1 ? '#0284c7' : '#7e22ce'}
                      stroke={direction === 1 ? '#38bdf8' : '#c084fc'}
                      strokeWidth="2.5"
                    />
                    {/* Inner aromatic ring circle */}
                    <circle cx="0" cy="0" r="7" fill="none" stroke="#ffffff" strokeWidth="1.8" />
                    <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="black">
                      C₆H₅
                    </text>
                  </g>

                  {/* Direction Label indicator */}
                  <text
                    x={cx}
                    y={direction === 1 ? 16 : 168}
                    textAnchor="middle"
                    fill={direction === 1 ? '#38bdf8' : '#c084fc'}
                    fontSize="10"
                    fontWeight="bold"
                  >
                    {direction === 1 ? '▲ رو به بالا' : '▼ رو به پایین'}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Dynamic Calculated Properties */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3.5 rounded-xl">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">بلورینگی (Crystallinity)</div>
          <div className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">{crystallinity}</div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3.5 rounded-xl">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">دمای ذوب (Tm)</div>
          <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">{tmValue}</div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3.5 rounded-xl">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">ظاهر نوری</div>
          <div className="text-sm font-extrabold text-sky-600 dark:text-sky-400">{appearance}</div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3.5 rounded-xl">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">نوع تجاری / سنتزی</div>
          <div className="text-xs font-extrabold text-amber-600 dark:text-amber-400">{commercialName}</div>
        </div>
      </div>
    </div>
  );
};
