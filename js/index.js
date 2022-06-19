let array = [];

const range = document.querySelector(".range");

// console.log(range.value);


const clearArray= (array) => {
  while (array.length) {
    array.pop();
  }
}

const generateArray = () => {

 
  clearArray(array);

  for (let i = 0; i < range.valueAsNumber; i++) {
    let random = Math.floor(Math.random() * 100);

    array.push(random);
  }
  console.log(array);
  const bars = document.querySelector("#bars");

  bars.innerHTML = '';

  array.forEach((value, index) => {
    bars.innerHTML += `<div class="bar" style=height:${value * 5}px></div>`;
  });
 
}

 generateArray();

let newArray = document.querySelector("#generate");
