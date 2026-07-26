import React, { useState } from 'react';
import { QuizQuestion } from '../types/polymer';

interface DynamicQuizProps {
  questions: QuizQuestion[];
  polymerCode: string;
}

export const DynamicQuiz: React.FC<DynamicQuizProps> = ({ questions, polymerCode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const currentQ = questions[currentIndex] || questions[0];

  const handleSelect = (idx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);
    if (idx === currentQ.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  if (!currentQ) return null;

  const optionLabels = ['الف', 'ب', 'ج', 'د'];

  return (
    <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 border-t-4 border-t-amber-500 rounded-2xl p-6 my-6 shadow-sm hover:shadow-md transition-all">
      {/* Header & Score Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <h3 className="text-xl font-black flex items-center gap-2.5 text-slate-900 dark:text-white">
          <span className="p-2 bg-amber-500/10 text-amber-500 rounded-xl text-lg">🧠</span>
          <span>آزمون خودارزیابی تخصصی {polymerCode}</span>
        </h3>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-extrabold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full text-slate-700 dark:text-slate-300">
            سوال {currentIndex + 1} از {questions.length}
          </span>
          <span className="text-xs font-extrabold bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-full text-emerald-600 dark:text-emerald-400">
            امتیاز: {score}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mb-5 overflow-hidden">
        <div
          className="bg-amber-500 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 p-5 rounded-xl mb-5 font-bold text-base text-slate-900 dark:text-white leading-relaxed shadow-inner flex items-start gap-3">
        <span className="text-amber-500 text-lg flex-shrink-0">❓</span>
        <span>{currentQ.q}</span>
      </div>

      {/* Options List */}
      <div className="grid grid-cols-1 gap-3">
        {currentQ.opts.map((opt, idx) => {
          const isCorrect = idx === currentQ.correct;
          const isSelected = idx === selectedOpt;

          let optionStyle =
            'border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:border-amber-500/60 hover:bg-amber-50/30 dark:hover:bg-slate-800/80';
          let badgeStyle =
            'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300';

          if (selectedOpt !== null) {
            if (isCorrect) {
              optionStyle =
                'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-bold shadow-xs';
              badgeStyle = 'bg-emerald-500 text-white';
            } else if (isSelected) {
              optionStyle =
                'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 font-bold shadow-xs';
              badgeStyle = 'bg-rose-500 text-white';
            } else {
              optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selectedOpt !== null}
              className={`w-full text-right p-4 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center flex-shrink-0 transition-colors ${badgeStyle}`}>
                  {optionLabels[idx] || idx + 1}
                </span>
                <span className="leading-snug">{opt}</span>
              </div>
              {selectedOpt !== null && isCorrect && <span className="text-emerald-500 font-bold text-base">✓</span>}
              {selectedOpt !== null && isSelected && !isCorrect && <span className="text-rose-500 font-bold text-base">✕</span>}
            </button>
          );
        })}
      </div>

      {/* Feedback Banner */}
      {selectedOpt !== null && (
        <div
          className={`mt-5 p-4 rounded-xl border transition-all duration-300 animate-fadeIn ${
            selectedOpt === currentQ.correct
              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
          }`}
        >
          {selectedOpt === currentQ.correct ? (
            <div className="flex items-start gap-2.5 text-sm font-bold">
              <span className="text-lg">🎉</span>
              <div>
                <div className="font-extrabold text-emerald-700 dark:text-emerald-300 mb-0.5">پاسخ کاملاً صحیح است!</div>
                <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-200 leading-relaxed">{currentQ.fb}</div>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-2.5 text-sm font-bold">
              <span className="text-lg">💡</span>
              <div>
                <div className="font-extrabold text-rose-700 dark:text-rose-300 mb-0.5">پاسخ نادرست است</div>
                <div className="text-xs font-semibold text-rose-800 dark:text-rose-200 leading-relaxed">
                  گزینه صحیح: <span className="underline font-bold">{currentQ.opts[currentQ.correct]}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer controls */}
      <div className="mt-5 flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-700/60">
        <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold">
          سوال بعدی را برای تثبیت یادگیری بزنید
        </span>
        <button
          onClick={handleNext}
          className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>سوال بعدی</span>
          <span>←</span>
        </button>
      </div>
    </div>
  );
};
