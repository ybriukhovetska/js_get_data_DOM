'use strict';

const populationEl = document.querySelectorAll('.population');
const totalRes = document.querySelector('.total-population');
const averageRes = document.querySelector('.average-population');
const populationArray = Array.from(populationEl).map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const total = populationArray.reduce((acc, curr) => acc + curr, 0);
const average = Math.round(total / populationArray.length);

totalRes.textContent = total.toLocaleString();
averageRes.textContent = average.toLocaleString();
