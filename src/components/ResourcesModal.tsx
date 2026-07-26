import React from 'react';

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResourcesModal: React.FC<ResourcesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center font-bold text-slate-600 dark:text-slate-200 transition-colors cursor-pointer"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 p-2 flex items-center justify-center text-2xl">
            📚
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              مراجع، مراجع علمی و دیتاشیت‌های صنعتی (Academic & Industry Sources)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Polypedia - دانشنامه مرجع مهندسی پلیمر • انجمن علمی مهندسی پلیمر
            </p>
          </div>
        </div>

        {/* Sources Content List */}
        <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
          {/* Section 1: Standard Academic Handbooks */}
          <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <h3 className="font-extrabold text-base text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
              <span>📖</span>
              <span>۱. کتب مرجع و هندبوک‌های پایه علوم و مهندسی پلیمر</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside leading-relaxed text-slate-600 dark:text-slate-300">
              <li>
                <strong className="en-mono text-slate-900 dark:text-white">Polymer Handbook (4th Edition)</strong> - J. Brandrup, E.H. Immergut, E.A. Grulke (Wiley-Interscience) - <span className="text-slate-500">مرجع مقادیر Enthalpy of Fusion, Crystal Parameters, Density</span>
              </li>
              <li>
                <strong className="en-mono text-slate-900 dark:text-white">Principles of Polymerization (4th Edition)</strong> - George Odian (Wiley) - <span className="text-slate-500">مرجع سینتیک سنتز، پلیمریزاسیون رادیکالی، زیگلر-ناتا و متالوسن</span>
              </li>
              <li>
                <strong className="en-mono text-slate-900 dark:text-white">Encyclopedia of Polymer Science and Technology</strong> - Herman F. Mark (Wiley) - <span className="text-slate-500">خواص حرارتی، مکانیکی و ساختار کریستالی گریدها</span>
              </li>
              <li>
                <strong className="en-mono text-slate-900 dark:text-white">Polymer Physics</strong> - Michael Rubinstein, Ralph H. Colby (Oxford University Press) - <span className="text-slate-500">فرمول‌بندی وزن درهم‌تنیدگی (Me) و شعاع ژیراسیون (Rg)</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Technical Standard Test Methods */}
          <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <h3 className="font-extrabold text-base text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
              <span>🧪</span>
              <span>۲. استانداردهای آزمون‌های بین‌المللی (ISO / ASTM Test Methods)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-bold en-mono text-slate-900 dark:text-white block mb-0.5">ASTM D1238 / ISO 1133</span>
                <span className="text-slate-500 dark:text-slate-400">اندازه‌گیری شاخص جریان مذاب (MFI / MFR)</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-bold en-mono text-slate-900 dark:text-white block mb-0.5">ASTM D638 / ISO 527</span>
                <span className="text-slate-500 dark:text-slate-400">خواص کششی، مدول یانگ و استحکام تسلیم</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-bold en-mono text-slate-900 dark:text-white block mb-0.5">ASTM D3418 / ISO 11357</span>
                <span className="text-slate-500 dark:text-slate-400">کالری‌متری روبشی تفاضلی (DSC) برای Tg، Tm و درصد بلورینگی</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="font-bold en-mono text-slate-900 dark:text-white block mb-0.5">ASTM D7611 / ISO 11469</span>
                <span className="text-slate-500 dark:text-slate-400">کدگذاری کدهای بازیافت رزین‌ها (Resin Identification Code)</span>
              </div>
            </div>
          </div>

          {/* Section 3: Iranian & International Petrochemical Plant Catalogs */}
          <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <h3 className="font-extrabold text-base text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
              <span>🏭</span>
              <span>۳. دیتاشیت‌ها و کاتالوگ‌های پتروشیمی‌های داخلی و خارجی</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              اطلاعات تجاری، MFI، چگالی، کاربردها و گریدهای تجاری مستقیم از برگه مشخصات فنی پتروشیمی‌های زیر استخراج گردیده است:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-amber-600 dark:text-amber-400 font-bold block mb-1">🇮🇷 پتروشیمی‌های مجتمع‌های ایران:</span>
                پتروشیمی امیرکبیر (Amir Kabir Petrochemical)، پتروشیمی جم (Jam Petrochemical)، پتروشیمی مارون (Marun)، پتروشیمی ایلام (Ilam)، پتروشیمی بندرامام (Bandar Imam)، پتروشیمی تبریز و شازند اراک.
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-blue-600 dark:text-blue-400 font-bold block mb-1">🌍 مجتمع‌های چندملیتی:</span>
                SABIC (عربستان)، LyondellBasell (هلند/آمریکا)، Dow Chemical (آمریکا)، ExxonMobil (آمریکا)، Formosa Plastics (تایوان)، INEOS (بریتانیا) و PetroChina (چین).
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs text-slate-400">
          <span>توسعه‌یافته توسط انجمن علمی مهندسی پلیمر</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors cursor-pointer"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>
  );
};
