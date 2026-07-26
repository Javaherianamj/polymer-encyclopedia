import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PolymerData } from '../types/polymer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface StressStrainChartProps {
  currentPolymer: PolymerData;
  isDark: boolean;
}

export const StressStrainChart: React.FC<StressStrainChartProps> = ({ currentPolymer, isDark }) => {
  const textColor = isDark ? '#eef4f8' : '#0f172a';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  // Data sets for comparative stress-strain curves
  const data = {
    datasets: [
      {
        label: 'LDPE (نرم و انعطاف‌پذیر)',
        data: [
          { x: 0, y: 0 },
          { x: 10, y: 10 },
          { x: 50, y: 11 },
          { x: 150, y: 12 },
          { x: 350, y: 13.5 },
          { x: 600, y: 15 }
        ],
        borderColor: '#8fd694',
        backgroundColor: currentPolymer.id === 'ldpe' ? 'rgba(143, 214, 148, 0.2)' : 'transparent',
        borderWidth: currentPolymer.id === 'ldpe' ? 3 : 1.5,
        tension: 0.4,
        fill: currentPolymer.id === 'ldpe'
      },
      {
        label: 'HDPE (صلب با نقطه تسلیم واضح)',
        data: [
          { x: 0, y: 0 },
          { x: 10, y: 30 },
          { x: 25, y: 25 },
          { x: 80, y: 24 },
          { x: 200, y: 26 },
          { x: 350, y: 28 }
        ],
        borderColor: '#7aa7ff',
        backgroundColor: currentPolymer.id === 'hdpe' ? 'rgba(122, 167, 255, 0.2)' : 'transparent',
        borderWidth: currentPolymer.id === 'hdpe' ? 3 : 1.5,
        tension: 0.4,
        fill: currentPolymer.id === 'hdpe'
      },
      {
        label: 'PP (استحکام کششی بالا)',
        data: [
          { x: 0, y: 0 },
          { x: 8, y: 36 },
          { x: 20, y: 30 },
          { x: 100, y: 32 },
          { x: 250, y: 35 }
        ],
        borderColor: '#ffb648',
        backgroundColor: currentPolymer.id === 'pp' ? 'rgba(255, 182, 72, 0.2)' : 'transparent',
        borderWidth: currentPolymer.id === 'pp' ? 3 : 1.5,
        tension: 0.4,
        fill: currentPolymer.id === 'pp'
      },
      {
        label: 'U-PVC (صلب و ترد)',
        data: [
          { x: 0, y: 0 },
          { x: 3, y: 52 },
          { x: 10, y: 48 },
          { x: 20, y: 50 }
        ],
        borderColor: '#ff7a5c',
        backgroundColor: currentPolymer.id === 'pvc' ? 'rgba(255, 122, 92, 0.2)' : 'transparent',
        borderWidth: currentPolymer.id === 'pvc' ? 3 : 1.5,
        tension: 0.3,
        fill: currentPolymer.id === 'pvc'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear' as const,
        title: {
          display: true,
          text: 'کرنش کششی / Strain (%)',
          color: textColor,
          font: { family: 'Vazirmatn', size: 12 }
        },
        ticks: { color: textColor, font: { family: 'JetBrains Mono' } },
        grid: { color: gridColor }
      },
      y: {
        title: {
          display: true,
          text: 'تنش کششی / Stress (MPa)',
          color: textColor,
          font: { family: 'Vazirmatn', size: 12 }
        },
        ticks: { color: textColor, font: { family: 'JetBrains Mono' } },
        grid: { color: gridColor },
        suggestedMax: 60
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: textColor,
          font: { family: 'Vazirmatn', size: 12 }
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.parsed.y} MPa در کرنش ${context.parsed.x}%`
        }
      }
    }
  };

  return (
    <div className="bg-[var(--panel-strong)] border border-[var(--line)] border-t-4 border-t-[var(--c-accent)] rounded-2xl p-6 my-6 shadow-lg">
      <h3 className="text-xl font-bold flex items-center gap-2 text-[var(--c-accent)] mb-2">
        <span>📈</span>
        <span>نمودار مقایسه‌ای تنش-کرنش (Stress-Strain Curve)</span>
      </h3>
      <p className="text-sm text-[var(--ink-dim)] mb-4">
        مقایسه رفتار مکانیکی و تغییر شکل {currentPolymer.nameFa} ({currentPolymer.code}) در برابر سایر پلیمرهای شاخص:
      </p>
      <div className="h-[300px] w-full relative">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
