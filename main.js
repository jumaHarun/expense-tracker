(async () => {
  try {
    const res = await fetch('./data.json');
    const data = await res.json();

    const maxDay = Math.max(...data.map((day) => day.amount));

    let html = data.map((day) => getChartHtml(day, maxDay)).join('');

    document.querySelector('.chart').innerHTML = html;
  } catch (err) {
    console.log(err);
  }
})();

function getChartHtml(obj, maxDay) {
  return `
<div class="day-wrapper flex">
  <div class="bar ${
    obj.amount === maxDay ? 'bg-top' : 'bg-bar'
  }" style="height: ${(obj.amount * 100) / 80}%;"></div>
  <p class="day">${obj.day}</p>
</div>
  `;
}
