import React, { useState, useEffect } from 'react';
import { polymersData } from './data/polymersData';
import { PolymerData } from './types/polymer';
import { Navbar } from './components/Navbar';
import { HeroChainAnimation } from './components/HeroChainAnimation';
import { ResinBadge } from './components/ResinBadge';
import { MarketShareChart } from './components/MarketShareChart';
import { StateSimulator } from './components/StateSimulator';
import { StressStrainChart } from './components/StressStrainChart';
import { MolecularViewer3D } from './components/MolecularViewer3D';
import { BranchingSimulator } from './components/BranchingSimulator';
import { TacticitySimulator } from './components/TacticitySimulator';
import { DPCalculator } from './components/DPCalculator';
import { DynamicQuiz } from './components/DynamicQuiz';
import { CatalogPage } from './components/CatalogPage';
import { CompareModal } from './components/CompareModal';
import { ResourcesModal } from './components/ResourcesModal';
import { ScrollToTop } from './components/ScrollToTop';
import { ProcessingWindowSimulator } from './components/ProcessingWindowSimulator';
import { AlloyingSimulator } from './components/AlloyingSimulator';
import { LCACircularEconomy } from './components/LCACircularEconomy';

export default function App() {
  // Hash routing helper
  const getPolymerFromHash = (): string | null => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (!hash || hash === 'catalog' || hash === 'home') return null;
    const exists = polymersData.some((p) => p.id === hash);
    return exists ? hash : null;
  };

  const [selectedPolymerId, setSelectedPolymerId] = useState<string | null>(getPolymerFromHash);
  const [activeTab, setActiveTab] = useState<'ind' | 'eng' | 'aca'>('ind');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [showCompare, setShowCompare] = useState<boolean>(false);
  const [showResources, setShowResources] = useState<boolean>(false);

  // Sync theme attribute on <html> element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Sync window location hash with selected polymer & listen for browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      setSelectedPolymerId(getPolymerFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectPolymer = (id: string | null) => {
    setSelectedPolymerId(id);
    if (id) {
      window.location.hash = id;
    } else {
      window.location.hash = 'catalog';
    }
    setActiveTab('ind');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePolymer: PolymerData | undefined = polymersData.find((p) => p.id === selectedPolymerId);

  return (
    <div className="min-h-screen bg-[var(--bg-0)] text-[var(--ink)] font-sans transition-colors duration-300 pb-16">
      {/* Top Navbar */}
      <Navbar
        polymers={polymersData}
        selectedPolymerId={selectedPolymerId}
        onSelectPolymer={handleSelectPolymer}
        onGoToCatalog={() => handleSelectPolymer(null)}
        onToggleCompare={() => setShowCompare(true)}
        onOpenResources={() => setShowResources(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Content Area */}
      <main className="pt-20">
        {selectedPolymerId === null || !activePolymer ? (
          <CatalogPage
            polymers={polymersData}
            onSelectPolymer={handleSelectPolymer}
            onOpenResources={() => setShowResources(true)}
          />
        ) : (
          <div className="max-w-[960px] mx-auto px-4">
            {/* Header Hero Banner */}
            <section className="bg-gradient-to-l from-blue-50/80 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700/80 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                    {activePolymer.nameFa}
                  </h1>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-mono font-bold rounded shadow-sm">
                    CAS {activePolymer.cas}
                  </span>
                </div>
                <span className="en-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900">
                  {activePolymer.code} DATASHEET
                </span>
              </div>

              <div className="en-mono text-sm text-slate-500 dark:text-slate-400 mb-3">
                {activePolymer.nameEn} • {activePolymer.family}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mb-6">
                {activePolymer.overviewText}
              </p>

              {/* Animated Polymer Chain */}
              <HeroChainAnimation chainType={activePolymer.chainType} />
            </section>

            {/* Tab Navigation - Segmented Control Grid for 100% Mobile Visibility */}
            <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900/90 rounded-2xl mb-8 border border-slate-200/80 dark:border-slate-800 shadow-inner">
              <button
                onClick={() => setActiveTab('ind')}
                className={`w-full py-2.5 px-1 sm:px-4 rounded-xl text-[11px] sm:text-sm font-extrabold flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center transition-all cursor-pointer ${
                  activeTab === 'ind'
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs border border-slate-200/80 dark:border-slate-700'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🏭</span>
                <span className="leading-tight">صنعتی و کاربردی</span>
              </button>

              <button
                onClick={() => setActiveTab('eng')}
                className={`w-full py-2.5 px-1 sm:px-4 rounded-xl text-[11px] sm:text-sm font-extrabold flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center transition-all cursor-pointer ${
                  activeTab === 'eng'
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs border border-slate-200/80 dark:border-slate-700'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>⚙️</span>
                <span className="leading-tight">دیتاشیت مهندسی</span>
              </button>

              <button
                onClick={() => setActiveTab('aca')}
                className={`w-full py-2.5 px-1 sm:px-4 rounded-xl text-[11px] sm:text-sm font-extrabold flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center transition-all cursor-pointer ${
                  activeTab === 'aca'
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs border border-slate-200/80 dark:border-slate-700'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🔬</span>
                <span className="leading-tight">شیمی و فیزیک پایه</span>
              </button>
            </div>

            {/* TAB 1: Industrial & Applied */}
            {activeTab === 'ind' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Polymer Passport */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>📋 شناسنامه پلیمر</span>
                  </h2>
                  <p className="text-sm leading-relaxed mb-4">{activePolymer.overviewText}</p>

                  {/* 4 Perfectly Uniform Centered Identity Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs hover:border-blue-500/50 transition-all">
                      <div className="text-[11px] font-bold text-slate-400 dark:text-slate-400 mb-1 flex items-center justify-center gap-1">
                        <span>🌐</span>
                        <span>شناسه CAS</span>
                      </div>
                      <div className="en-mono font-black text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                        {activePolymer.cas}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs hover:border-emerald-500/50 transition-all">
                      <div className="text-[11px] font-bold text-slate-400 dark:text-slate-400 mb-1 flex items-center justify-center gap-1">
                        <span>♻️</span>
                        <span>کد بازیافت رزین</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <ResinBadge resinCode={activePolymer.resinCode} code={activePolymer.code} compact />
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs hover:border-emerald-500/50 transition-all">
                      <div className="text-[11px] font-bold text-slate-400 dark:text-slate-400 mb-1 flex items-center justify-center gap-1">
                        <span>🧬</span>
                        <span>خانواده پلیمری</span>
                      </div>
                      <div className="en-mono font-black text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
                        {activePolymer.family}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs hover:border-amber-500/50 transition-all">
                      <div className="text-[11px] font-bold text-slate-400 dark:text-slate-400 mb-1 flex items-center justify-center gap-1">
                        <span>📅</span>
                        <span>سال توسعه</span>
                      </div>
                      <div className="en-mono font-black text-xs sm:text-sm text-amber-600 dark:text-amber-400">
                        {activePolymer.discoveryYear}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-[var(--ink-dim)]">
                    <span className="font-bold text-[var(--ink)]">نام‌های تجاری معروف: </span>
                    <span>{activePolymer.tradeNames.join(' ، ')}</span>
                  </div>
                </div>

                {/* Market Share Chart */}
                <MarketShareChart
                  data={activePolymer.marketShare}
                  polymerName={activePolymer.nameFa}
                  isDark={isDark}
                />

                {/* Processing Methods & Machinery */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>🏭 روش‌های فرآیند و ماشین‌آلات</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)] mb-1">دمای فرآیند</div>
                      <div className="en-mono text-base font-bold text-[var(--ink)]">{activePolymer.processing.processTemp}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)] mb-1">شاخص جریان مذاب (MFI)</div>
                      <div className="en-mono text-base font-bold text-[var(--ink)]">{activePolymer.processing.mfi}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)] mb-1">نسبت دمش (BUR) - فیلم</div>
                      <div className="en-mono text-base font-bold text-[var(--ink)]">{activePolymer.processing.bur}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-bold mb-2">تکنیک‌های رایج شکل‌دهی:</div>
                    <ul className="list-disc list-inside text-sm space-y-1 text-[var(--ink-dim)]">
                      {activePolymer.processing.techniques.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>

                  {activePolymer.processing.specialNoteTitle && (
                    <div className="border-r-4 border-r-[var(--c-accent)] bg-gradient-to-l from-amber-500/10 to-transparent p-4 rounded-xl mt-4">
                      <h4 className="font-bold text-sm text-[var(--c-accent)] mb-1">
                        {activePolymer.processing.specialNoteTitle}
                      </h4>
                      <p className="text-xs leading-relaxed text-[var(--ink)]">
                        {activePolymer.processing.specialNoteContent}
                      </p>
                    </div>
                  )}
                </div>

                {/* Processing Window Simulator */}
                <ProcessingWindowSimulator polymer={activePolymer} />

                {/* Alloying & Blending Simulator */}
                <AlloyingSimulator polymer={activePolymer} />

                {/* Life Cycle Assessment & Circular Economy */}
                <LCACircularEconomy polymer={activePolymer} />

                {/* Applications */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>📦 حوزه‌های کاربردی</span>
                  </h2>
                  <ul className="space-y-2 text-sm text-[var(--ink)]">
                    {activePolymer.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--c-primary)] font-bold">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Iranian & Multinational Petrochemical Manufacturers */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>🌍 تولیدکنندگان جهانی و داخلی</span>
                  </h2>

                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-[var(--c-primary)] mb-2">🇮🇷 پتروشیمی‌های ایرانی:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activePolymer.iranianManufacturers.map((mfg, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                        >
                          {mfg}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-[var(--c-primary)] mb-2">🌍 شرکت‌های چندملیتی:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {activePolymer.multinationalManufacturers.map((mfg, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                        >
                          {mfg}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Engineering Datasheet */}
            {activeTab === 'eng' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Physical State Simulator */}
                <StateSimulator polymer={activePolymer} />

                {/* Thermal Properties Card */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>🔥 خواص حرارتی</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">دمای انتقال شیشه‌ای (Tg)</div>
                      <div className="en-mono text-base font-bold text-sky-600 dark:text-sky-400">{activePolymer.thermal.tg}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">دمای ذوب (Tm)</div>
                      <div className="en-mono text-base font-bold text-emerald-600 dark:text-emerald-400">{activePolymer.thermal.tm}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">آنتالپی ذوب (تجربی)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.thermal.enthalpyExp}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">آنتالپی ذوب (100% بلورینگی)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.thermal.enthalpy100Cryst}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">دمای تخریب حرارتی</div>
                      <div className="en-mono text-base font-bold text-rose-600 dark:text-rose-400">{activePolymer.thermal.degradationTemp}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">تغییر شکل حرارتی (HDT)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.thermal.hdt}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">دمای نرم‌شدگی ویکات</div>
                      <div className="en-mono text-base font-bold">{activePolymer.thermal.vicat}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">هدایت حرارتی</div>
                      <div className="en-mono text-base font-bold">{activePolymer.thermal.conductivity}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">ضریب انبساط حرارتی (CTE)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.thermal.cte}</div>
                    </div>
                  </div>
                </div>

                {/* Stress Strain Chart */}
                <StressStrainChart currentPolymer={activePolymer} isDark={isDark} />

                {/* Mechanical Properties Card */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>⚙️ خواص مکانیکی</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">استحکام کششی</div>
                      <div className="en-mono text-base font-bold">{activePolymer.mechanical.tensileStrength}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">مدول یانگ (الاستیسیته)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.mechanical.youngModulus}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">ازدیاد طول در نقطه شکست</div>
                      <div className="en-mono text-base font-bold">{activePolymer.mechanical.elongationAtBreak}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">مدول خمشی</div>
                      <div className="en-mono text-base font-bold">{activePolymer.mechanical.flexuralModulus}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">سختی (مقیاس Shore D)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.mechanical.hardnessShoreD}</div>
                    </div>
                    {activePolymer.mechanical.izodImpact && (
                      <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                        <div className="text-xs text-[var(--ink-dim)]">مقاومت ضربه‌ای (ایزود)</div>
                        <div className="en-mono text-base font-bold">{activePolymer.mechanical.izodImpact}</div>
                      </div>
                    )}
                  </div>
                  {activePolymer.mechanical.description && (
                    <p className="text-xs text-[var(--ink-dim)] leading-relaxed">
                      {activePolymer.mechanical.description}
                    </p>
                  )}
                </div>

                {/* Physical Properties */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>📦 خواص فیزیکی پایه</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">چگالی (Density)</div>
                      <div className="en-mono text-base font-bold text-amber-600 dark:text-amber-400">{activePolymer.physical.density}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">جذب آب (24 ساعت)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.physical.waterAbsorption}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">ضریب شکست نور</div>
                      <div className="en-mono text-base font-bold">{activePolymer.physical.refractiveIndex}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">نفوذپذیری اکسیژن</div>
                      <div className="en-mono text-base font-bold">{activePolymer.physical.oxygenPermeability}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">نفوذپذیری دی‌اکسیدکربن</div>
                      <div className="en-mono text-base font-bold">{activePolymer.physical.co2Permeability}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3.5 rounded-xl hover:border-blue-500/60 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5">
                      <div className="text-xs text-[var(--ink-dim)]">ظاهر و شفافیت</div>
                      <div className="text-sm font-bold">{activePolymer.physical.appearance}</div>
                    </div>
                  </div>
                  <p className="text-[11px] text-[var(--ink-dim)] en-mono mt-3">
                    * Permeability units: cm³·mm/m²·day·atm
                  </p>
                </div>

                {/* Chemical Resistance Table */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>⚗️ مقاومت شیمیایی</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activePolymer.chemicalResistance.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl flex justify-between items-center text-sm"
                      >
                        <span className="font-medium text-[var(--ink)]">{item.category}</span>
                        <span className={`font-bold ${item.colorClass}`}>{item.rating}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Electrical Properties */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>🔌 خواص الکتریکی</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">ثابت دی‌الکتریک</div>
                      <div className="en-mono text-base font-bold">{activePolymer.electrical.dielectricConstant}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">استقامت دی‌الکتریک</div>
                      <div className="en-mono text-base font-bold">{activePolymer.electrical.dielectricStrength}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">مقاومت حجمی</div>
                      <div className="en-mono text-base font-bold">{activePolymer.electrical.volumeResistivity}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">ضریب تلفات دی‌الکتریک</div>
                      <div className="en-mono text-base font-bold">{activePolymer.electrical.dissipationFactor}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Academic & Basic Physics */}
            {activeTab === 'aca' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Structure & Monomer */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>🧬 ساختار مولکولی و معماری زنجیر</span>
                  </h2>
                  <p className="text-sm leading-relaxed mb-4">
                    مونومر سازنده {activePolymer.code}، {activePolymer.academic.monomerName} با فرمول شیمیایی{' '}
                    <span className="en-mono font-bold">{activePolymer.academic.monomerFormula}</span> و جرم مولی{' '}
                    <span className="en-mono font-bold">{activePolymer.academic.monomerMolarMass} g/mol</span> می‌باشد. واحد تکرارشونده آن به صورت{' '}
                    <span className="en-mono font-bold">{activePolymer.academic.repeatingUnit}</span> نمایش داده می‌شود.
                  </p>

                  {activePolymer.id === 'ldpe' && <BranchingSimulator polymer={activePolymer} />}
                  {activePolymer.id === 'ps' && <TacticitySimulator polymer={activePolymer} />}
                  <MolecularViewer3D
                    atoms={activePolymer.atoms3d}
                    monomerName={activePolymer.academic.monomerName}
                    polymerCode={activePolymer.code}
                    isDark={isDark}
                  />
                </div>

                {/* Crystal System & Morphology */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>🏗️ مورفولوژی و شبکه‌ی بلوری</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">درصد بلورینگی</div>
                      <div className="en-mono text-base font-bold text-[var(--c-primary)]">{activePolymer.academic.crystallinityRange}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">پارامترهای سلول واحد (a, b, c)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.unitCell}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">ضخامت لاملاها</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.lamellaThickness}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">اندازه اسفرولیت‌ها</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.spheruliteSize}</div>
                    </div>
                  </div>
                </div>

                {/* Polymerization Kinetics */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>⚗️ سینتیک سنتز و پلیمریزاسیون</span>
                  </h2>
                  <p className="text-sm leading-relaxed mb-3">
                    <span className="font-bold">مکانیزم واکنش: </span>
                    {activePolymer.academic.mechanism}
                  </p>

                  <div className="mb-3">
                    <span className="font-bold text-sm block mb-1">انواع راکتورهای صنعتی:</span>
                    <ul className="list-disc list-inside text-sm text-[var(--ink-dim)] space-y-1">
                      {activePolymer.academic.reactorTypes.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs text-[var(--ink-dim)] bg-[var(--panel-strong)] p-3 rounded-xl border border-[var(--line)] leading-relaxed">
                    💡 <span className="font-bold text-[var(--ink)]">ملاحظات سینتیکی: </span>
                    {activePolymer.academic.kineticNotes}
                  </p>
                </div>

                {/* Molecular Weight Characteristics */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>📊 ویژگی‌های وزن مولکولی</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">وزن مولکولی وزنی (Mw)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.mw}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">وزن مولکولی عددی (Mn)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.mn}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">شاخص چندپخشی (PDI)</div>
                      <div className="en-mono text-base font-bold text-[var(--c-accent)]">{activePolymer.academic.pdi}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">درجه پلیمریزاسیون (DP)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.dpRange}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">وزن درهم‌تنیدگی (Me)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.entanglementMw}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">شعاع ژیراسیون (Rg)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.radiusOfGyration}</div>
                    </div>
                  </div>

                  <DPCalculator polymer={activePolymer} />
                </div>

                {/* Advanced Rheology */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>⚙️ رئولوژی پیشرفته</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">ویسکوزیته برش صفر (η0)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.zeroShearViscosity}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">ضریب توان (Power Law Index n)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.powerLawIndex}</div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--ink-dim)] leading-relaxed">
                    {activePolymer.academic.rheologyNotes}
                  </p>
                </div>

                {/* Advanced Physics & Hansen Solubility */}
                <div className="bg-[var(--panel)] border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--c-secondary)]" />
                    <span>🔬 فیزیک پیشرفته و ترمودینامیک</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">پارامتر حلالیت (δ)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.solubilityParameter}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">مولفه پراکندگی هنسن (δD)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.hansenD}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">مولفه قطبی هنسن (δP)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.hansenP}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">مولفه پیوند هیدروژنی (δH)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.hansenH}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">برهم‌کنش فلوری-هاگینز (χ)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.floryHugginsChi}</div>
                    </div>
                    <div className="bg-[var(--panel-strong)] border border-[var(--line)] p-3 rounded-xl">
                      <div className="text-xs text-[var(--ink-dim)]">کسر حجم آزاد (FFV)</div>
                      <div className="en-mono text-base font-bold">{activePolymer.academic.ffv}</div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--ink-dim)] leading-relaxed">
                    {activePolymer.academic.thermoNotes}
                  </p>
                </div>

                {/* Dynamic Quiz */}
                <DynamicQuiz
                  questions={activePolymer.quiz}
                  polymerCode={activePolymer.code}
                />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Compare Modal */}
      {showCompare && (
        <CompareModal
          polymers={polymersData}
          onClose={() => setShowCompare(false)}
        />
      )}

      {/* Resources & Academic Sources Modal */}
      <ResourcesModal
        isOpen={showResources}
        onClose={() => setShowResources(false)}
      />

      {/* Scroll to Top floating button */}
      <ScrollToTop />
    </div>
  );
}
