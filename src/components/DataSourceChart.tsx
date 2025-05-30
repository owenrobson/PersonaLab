import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const DataSourceChart: React.FC = () => {
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
          type: 'bar',
          data: {
            labels: ['Web Traffic', 'CRM Data', 'Survey Results', 'Social Media', 'Customer Support'],
            datasets: [
              {
                label: 'Data Sources',
                data: [65, 42, 28, 35, 20],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.7)', // Blue
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
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.dataset.label}: ${context.raw}`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Data Points'
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

export default DataSourceChart;