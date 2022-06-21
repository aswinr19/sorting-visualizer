
let array = [];

const range = document.querySelector(".range");

const bars = document.querySelector("#bars");

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
  bars.innerHtml = "";

  array.forEach((value) => {
        bars.innerHTML += `<div class="bar" style=height:${value * 5}px></div>`;
  });

};

generateRandomArray(array, range);


//bubble sort 

const bubbleSortArray = ( array ) => {

  for(let i = 0; i < array.length; i++){

      // for(let j = 0; j < )

  }

}