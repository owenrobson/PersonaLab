import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PersonaTypeDistribution: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Decision Makers', 'Influencers', 'End Users', 'Technical Evaluators', 'Budget Holders'],
            datasets: [
              {
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.7)',  // Blue
                  'rgba(139, 92, 246, 0.7)',  // Purple
                  'rgba(13, 148, 136, 0.7)',  // Teal
                  'rgba(249, 115, 22, 0.7)',  // Orange
                  'rgba(234, 88, 12, 0.7)',   // Amber
                ],
                borderColor: [
                  'rgba(59, 130, 246, 1)',
                  'rgba(139, 92, 246, 1)',
                  'rgba(13, 148, 136, 1)',
                  'rgba(249, 115, 22, 1)',
                  'rgba(234, 88, 12, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  font: {
                    size: 12
                  },
                  padding: 20
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const label = context.label || '';
                    const value = context.raw as number;
                    const total = context.dataset.data.reduce((a, b) => (a as number) + (b as number), 0) as number;
                    const percentage = Math.round((value / total) * 100);
                    return `${label}: ${percentage}% (${value})`;
                  }
                }
              }
            }
          },
        });
      }
    }

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PersonaTypeDistribution;