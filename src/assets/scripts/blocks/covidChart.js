document.addEventListener('DOMContentLoaded', function() {
  if (!document.querySelector('[data-covid-chart]')) return;

  initCovidChart();
});

async function initCovidChart() {
  const ctx = document.querySelector('[data-covid-chart]');
  const data = {
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        label: 'Last week',
        data: await fetchDay(7),
        backgroundColor: 'rgba(85, 77, 222, 1)',
        borderRadius: 25,
        borderSkipped: false,
      },
      {
        label: 'The week before',
        data: await fetchDay(14),
        backgroundColor: 'rgba(244, 78, 119, 1)',
        borderRadius: 25,
        borderSkipped: false,
      }
    ]
  };
  const options = {
    responsive: true,
    scales: {
      y: {
        display: false,
      },
    },
  };
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
  ctx.computedStyleMap.width = '100%';
}

async function fetchDay(lastDay) {
  const api = 'https://api.covidtracking.com/v1/us/daily.json';
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const response_1 = await response.json();
  const week = response_1.slice(lastDay - 7, lastDay);
  const weekCases = week.map(day => day.positive);

  return weekCases;
}
