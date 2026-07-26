import React from 'react';
import { PolymerData } from '../types/polymer';

interface NavbarProps {
  polymers: PolymerData[];
  selectedPolymerId: string | null;
  onSelectPolymer: (id: string) => void;
  onGoToCatalog: () => void;
  onToggleCompare: () => void;
  onOpenResources: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  polymers,
  selectedPolymerId,
  onSelectPolymer,
  onGoToCatalog,
  onToggleCompare,
  onOpenResources,
  isDark,
  onToggleTheme
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--line)] flex items-center justify-between px-4 sm:px-8 z-50 shadow-sm">
      {/* Brand & Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onGoToCatalog}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity text-right cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
            <img src="/logo.svg" alt="Polymer Engineering Association" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-[var(--ink)] leading-none">
              Polypedia
            </span>
            <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 mt-0.5">
              انجمن علمی مهندسی پلیمر
            </span>
          </div>
        </button>
      </div>

      {/* Quick Polymer Switcher Pills */}
      <div className="hidden lg:flex items-center gap-1.5 bg-[var(--panel-strong)] border border-[var(--line)] p-1 rounded-full text-xs">
        <button
          onClick={onGoToCatalog}
          className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
            selectedPolymerId === null
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
          }`}
        >
          🌐 فهرست گریدها
        </button>
        {polymers.map((p) => {
          const isActive = selectedPolymerId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelectPolymer(p.id)}
              className={`px-3 py-1.5 rounded-full font-bold transition-all en-mono cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm font-extrabold'
                  : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
              }`}
            >
              {p.code}
            </button>
          );
        })}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onOpenResources}
          className="flex items-center gap-1.5 bg-[var(--panel-strong)] hover:bg-[var(--line)] text-[var(--ink)] px-3 py-1.5 rounded-full text-xs font-bold border border-[var(--line)] transition-colors cursor-pointer shadow-sm"
          title="مشاهده مراجع و منابع علمی"
        >
          <span>📚</span>
          <span className="hidden sm:inline">منابع علمی</span>
        </button>

        <button
          onClick={onToggleCompare}
          className="hidden sm:flex items-center gap-1.5 bg-[var(--panel-strong)] hover:bg-[var(--line)] text-[var(--ink)] px-3.5 py-1.5 rounded-full text-xs font-bold border border-[var(--line)] transition-colors cursor-pointer shadow-sm"
          title="مقایسه فنی دو پلیمر"
        >
          <span>⚖️</span>
          <span>مقایسه</span>
        </button>

        {/* Sleek Theme Switcher Capsule */}
        <div className="flex bg-[var(--panel-strong)] p-1 rounded-full border border-[var(--line)]">
          <button
            onClick={onToggleTheme}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              isDark
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
            }`}
          >
            Dark
          </button>
          <button
            onClick={onToggleTheme}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
              !isDark
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
            }`}
          >
            Light
          </button>
        </div>
      </div>
    </header>
  );
};
