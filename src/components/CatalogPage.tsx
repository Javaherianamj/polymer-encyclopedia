import React, { useState } from 'react';
import { PolymerData } from '../types/polymer';

interface CatalogPageProps {
  polymers: PolymerData[];
  onSelectPolymer: (id: string) => void;
  onOpenResources?: () => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ polymers, onSelectPolymer, onOpenResources }) => {
  const [search, setSearch] = useState('');
  const [expandedFamily, setExpandedFamily] = useState<string | null>('Polyolefins');

  const filtered = polymers.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.nameFa.toLowerCase().includes(q) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.cas.includes(q) ||
      p.tradeNames.some((tn) => tn.toLowerCase().includes(q)) ||
      p.applications.some((app) => app.toLowerCase().includes(q))
    );
  });

  // Group by family
  const families: Record<string, PolymerData[]> = {};
  filtered.forEach((p) => {
    if (!families[p.family]) {
      families[p.family] = [];
    }
    families[p.family].push(p);
  });

  return (
    <div className="max-w-[960px] mx-auto px-4 py-8">
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-l from-blue-50/90 via-white to-blue-50/40 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-blue-200/80 dark:border-slate-700/80 rounded-3xl p-8 mb-8 text-center relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-amber-500" />
        
        <div className="flex justify-center mb-3">
          <img src="/logo.svg" alt="Polymer Engineering Association Logo" className="w-16 h-16 object-contain" />
        </div>

        <span className="text-xs font-bold text-amber-700 dark:text-amber-400 tracking-wider block mb-1">
          انجمن علمی مهندسی پلیمر • Polymer Engineering Association
        </span>
        <h1 className="text-3xl sm:text-4xl font-black mb-3 text-slate-900 dark:text-white">
          دانشنامه و مرجع تخصصی گریدها و خانواده پلیمرها
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6 font-medium">
          مرجع کامل خواص مهندسی، آکادمیک و صنعتی پلیمرها. برای مشاهده مشخصات کامل هر گرید، خانواده پلیمری را انتخاب کرده یا مشخصه مورد نظر را جستجو نمایید.
        </p>

        {/* Action Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو بر اساس نام، گرید (LDPE, HDPE)، کد CAS یا نام تجاری..."
              className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white pr-10 pl-4 py-3 rounded-2xl text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all shadow-xs"
            />
            <span className="absolute right-3.5 top-3.5 text-slate-400 text-base">🔍</span>
          </div>

          {onOpenResources && (
            <button
              onClick={onOpenResources}
              className="w-full sm:w-auto whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
            >
              <span>📚</span>
              <span>مراجع و منابع علمی</span>
            </button>
          )}
        </div>
      </div>

      {/* Accordions / Family List */}
      <div className="space-y-4">
        {Object.keys(families).length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">هیچ پلیمری با عبارت جستجو شده یافت نشد.</p>
          </div>
        ) : (
          Object.entries(families).map(([family, items]) => {
            const isExpanded = expandedFamily === family || search.length > 0;
            return (
              <div
                key={family}
                className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setExpandedFamily(isExpanded ? null : family)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-right font-extrabold text-base bg-slate-50/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-blue-600 shadow-xs" />
                    <span className="text-slate-900 dark:text-white">خانواده پلیمری {family}</span>
                    <span className="text-xs text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950/80 px-3 py-1 rounded-full font-bold border border-blue-200 dark:border-blue-900">
                      {items.length} گرید پلیمری ثبت‌شده
                    </span>
                  </span>
                  <span className="text-xl text-blue-600 dark:text-blue-400 font-black transition-transform duration-200">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/40 dark:bg-slate-900/40">
                    {items.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => onSelectPolymer(p.id)}
                        className="text-right p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/30 dark:hover:bg-slate-750 transition-all duration-200 transform hover:-translate-y-1 shadow-xs hover:shadow-md group cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {p.nameFa}
                          </span>
                          <span className="en-mono text-xs font-black bg-blue-600 text-white px-2.5 py-1 rounded-lg shadow-xs">
                            {p.code}
                          </span>
                        </div>

                        <div className="text-xs text-slate-500 dark:text-slate-400 en-mono mb-3">
                          CAS: {p.cas} | Resin Code: #{p.resinCode}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                          <span className="text-xs bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
                            Tg: <span className="en-mono font-bold text-sky-600 dark:text-sky-400">{p.thermal.tg}</span>
                          </span>
                          <span className="text-xs bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
                            Tm: <span className="en-mono font-bold text-emerald-600 dark:text-emerald-400">{p.thermal.tm}</span>
                          </span>
                          <span className="text-xs bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg text-slate-700 dark:text-slate-300 font-medium">
                            Density: <span className="en-mono font-bold text-amber-600 dark:text-amber-400">{p.physical.density}</span>
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
