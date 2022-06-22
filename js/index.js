let array = [];

const range = document.querySelector(".range");

const bar = document.querySelector("#bar");

const newArray = document.querySelector("#generate");

const clearArray = (array) => {
  while (array.length) {
    array.pop();
  }
};

const generateRandomArray = (array, range) => {
  if (array) clearArray(array);

  for (let i = 0; i < range.valueAsNumber; i++) {
    let random = Math.floor(Math.random() * 100);
    array.push(random);
  }

  console.log(array);
  bar.innerHtml = "";

  array.forEach((value) => {
    bar.innerHTML += `<div class="bars" id="${value}"style=height:${
      value * 5
    }px></div>`;
  });
};

generateRandomArray(array, range);

const swap = (e1, e2) => {
  let temp = e1.style.height;
  e1.style.height = e2.style.height;
  e2.style.height = temp;
};

const bubbleSort = (array) => {
  let bars = document.querySelectorAll(".bars");
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        // bars[j].style.background = "red";
        // bars[j + 1].style.background = "red";

        swap(bars[j] > bars[j + 1]);
      }
    }
  }
};


bubbleSort(array);