import React, { useState } from 'react';
import { PolymerData } from '../types/polymer';

interface CompareModalProps {
  polymers: PolymerData[];
  onClose: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ polymers, onClose }) => {
  const [poly1Id, setPoly1Id] = useState<string>(polymers[0]?.id || 'ldpe');
  const [poly2Id, setPoly2Id] = useState<string>(polymers[1]?.id || 'hdpe');

  const p1 = polymers.find((p) => p.id === poly1Id) || polymers[0];
  const p2 = polymers.find((p) => p.id === poly2Id) || polymers[1];

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl relative">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>⚖️</span>
            <span>جدول مقایسه فنی پلیمرها</span>
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold hover:bg-rose-500 hover:text-white transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">پلیمر اول:</label>
            <select
              value={poly1Id}
              onChange={(e) => setPoly1Id(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm outline-none focus:border-blue-600 cursor-pointer"
            >
              {polymers.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nameFa} ({p.code})
                </option>
              ))}
            </select>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">پلیمر دوم:</label>
            <select
              value={poly2Id}
              onChange={(e) => setPoly2Id(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-sm outline-none focus:border-blue-600 cursor-pointer"
            >
              {polymers.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nameFa} ({p.code})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                <th className="p-3.5 text-right font-bold">پارامتر مهندسی / علمی</th>
                <th className="p-3.5 text-center text-blue-600 dark:text-blue-400 font-extrabold en-mono">{p1.code}</th>
                <th className="p-3.5 text-center text-sky-600 dark:text-sky-400 font-extrabold en-mono">{p2.code}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900/60 text-slate-800 dark:text-slate-200">
              <tr>
                <td className="p-3.5 font-medium">نام انگلیسی / عمومی</td>
                <td className="p-3.5 text-center en-mono">{p1.nameEn}</td>
                <td className="p-3.5 text-center en-mono">{p2.nameEn}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium">کد بازیافت رزین</td>
                <td className="p-3.5 text-center en-mono font-bold text-amber-600 dark:text-amber-400">Resin {p1.resinCode}</td>
                <td className="p-3.5 text-center en-mono font-bold text-amber-600 dark:text-amber-400">Resin {p2.resinCode}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium">چگالی (Density)</td>
                <td className="p-3.5 text-center en-mono">{p1.physical.density}</td>
                <td className="p-3.5 text-center en-mono">{p2.physical.density}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium">دمای انتقال شیشه‌ای (Tg)</td>
                <td className="p-3.5 text-center en-mono">{p1.thermal.tg}</td>
                <td className="p-3.5 text-center en-mono">{p2.thermal.tg}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium">دمای ذوب (Tm)</td>
                <td className="p-3.5 text-center en-mono">{p1.thermal.tm}</td>
                <td className="p-3.5 text-center en-mono">{p2.thermal.tm}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium">استحکام کششی (Tensile Strength)</td>
                <td className="p-3.5 text-center en-mono">{p1.mechanical.tensileStrength}</td>
                <td className="p-3.5 text-center en-mono">{p2.mechanical.tensileStrength}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium">مدول یانگ (Young Modulus)</td>
                <td className="p-3.5 text-center en-mono">{p1.mechanical.youngModulus}</td>
                <td className="p-3.5 text-center en-mono">{p2.mechanical.youngModulus}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium">درصد بلورینگی (Crystallinity)</td>
                <td className="p-3.5 text-center en-mono">{p1.academic.crystallinityRange}</td>
                <td className="p-3.5 text-center en-mono">{p2.academic.crystallinityRange}</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium">دمای فرآیند شکل‌دهی</td>
                <td className="p-3.5 text-center en-mono">{p1.processing.processTemp}</td>
                <td className="p-3.5 text-center en-mono">{p2.processing.processTemp}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
