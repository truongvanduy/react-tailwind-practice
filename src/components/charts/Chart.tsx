import { useEffect, useRef } from 'react';
import '@/App.css';
import Chart from 'chart.js/auto';

function TheChart() {
  const chartRef = useRef<Chart<'bar', (number | null)[], string> | null>(null);

  useEffect(() => {
    const ctx = document.getElementById('bar-chart') as HTMLCanvasElement;

    // If there's a chart already, destroy it
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 30, 15, null, null],
            borderWidth: 1,
          },
          {
            label: '# of Volta',
            data: [-12, -10, -3, -5, null, null],
            borderWidth: 1,
          },
          {
            label: 'Forecast-1',
            data: [null, null, null, null, 22, 33],
            borderWidth: 1,
          },
          {
            label: 'Forecast-2',
            data: [null, null, null, null, -12, -13],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
  });

  return (
    <div className='container'>
      <div>
        <canvas id='bar-chart'></canvas>
      </div>
    </div>
  );
}

export default TheChart;
