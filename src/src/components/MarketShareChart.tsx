import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { MarketShareItem } from '../types/polymer';

ChartJS.register(ArcElement, Tooltip, Legend);

interface MarketShareChartProps {
  data: MarketShareItem[];
  polymerName: string;
  isDark: boolean;
}

export const MarketShareChart: React.FC<MarketShareChartProps> = ({ data, polymerName, isDark }) => {
  const textColor = isDark ? '#eef4f8' : '#0f172a';

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.percentage),
        backgroundColor: ['#7aa7ff', '#8fd694', '#ffb648', '#ff7a5c', '#c084fc', '#38bdf8'],
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left' as const,
        labels: {
          color: textColor,
          font: { family: 'Vazirmatn', size: 12 },
          padding: 16
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.parsed}%`
        }
      }
    }
  };

  return (
    <div className="bg-[var(--panel-strong)] border border-[var(--line)] border-t-4 border-t-[var(--c-secondary)] rounded-2xl p-6 my-6 shadow-lg">
      <h3 className="text-xl font-bold flex items-center gap-2 text-[var(--c-secondary)] mb-2">
        <span>📊</span>
        <span>سهم بازار کاربردهای {polymerName} در جهان</span>
      </h3>
      <p className="text-sm text-[var(--ink-dim)] mb-4">
        توزیع درصدی مصرف جهانی این پلیمر در صنایع مختلف:
      </p>
      <div className="h-[260px] w-full relative">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};
