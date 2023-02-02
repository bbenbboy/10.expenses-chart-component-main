"use strict";

function getData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      return addBar(data);
    })
    .catch((error) => console.error(error.status));
}

function addBar(data) {
  for (const obj of data) {
    const multiply = 2.5;
    const bar = document.querySelector(`#${obj.day}`);
    bar.style.height = `${obj.amount * multiply}px `;
    bar.dataset.amount = `$${obj.amount}`;
  }
}

const dayIndex = (new Date().getDay() - 1 + 7) % 7;
const currentBar = document.querySelectorAll(".bar")[dayIndex];
currentBar.style.backgroundColor = "hsl(186, 34%, 60%)";

getData();
