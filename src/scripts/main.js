'use strict';

const populationEl = document.querySelectorAll('.population');
const totalRes = document.querySelector('.total-population');
const averageRes = document.querySelector('.average-population');
const populationArray = Array.from(populationEl).map((el) => {
  const clean = el.textContent.replace(/,/g, '');
  const n = Number(clean);

  return n;
});
const filteredArr = populationArray.filter((n) => !isNaN(n));

if (filteredArr.length === 0) {
  totalRes.textContent = '0';
  averageRes.textContent = '0';
}

const total = filteredArr.reduce((acc, curr) => acc + curr, 0);
const average = Math.round(total / filteredArr.length);

totalRes.textContent = total.toLocaleString('en-En');
averageRes.textContent = average.toLocaleString('en-EN');
