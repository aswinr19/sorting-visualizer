//accessing neccessory dom elements

const bar = document.querySelector("#bar");

const range = document.querySelector("#range");

const newArray = document.querySelector("#generate");

const bubbleSort = document.querySelector("#bubble");

const selectionSort = document.querySelector("#selection");

const insertionSort = document.querySelector("#insertion");

const mergeSort = document.querySelector("#merge");

const quickSort = document.querySelector("#quick");

//swap function for sorting algorithms

// const swap = (el1, el2) => {
//   const temp = el1.style.height;
//   el1.style.height = el2.style.height;
//   el2.style.height = temp;
// };

//clear function to remove all elements from the array

const clearArray = (array) => {
  while (array.length) {
    array.pop();
  }
};

// generateArray function to generate new random array

const generateNewArray = () => {
  let array = [];

  for (let i = 0; i < range.valueAsNumber; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  return array;
};

// const array = generateNewArray();

// // console.log(range.valueAsNumber);
// console.log(array);


// //generateBars function generates a new set of bars
// const generateBars = (array) =>{



// }