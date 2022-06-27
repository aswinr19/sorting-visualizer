//accessing neccessory dom elements

const bars = document.querySelector("#bars");

const range = document.querySelector("#range");

const newArray = document.querySelector("#generate");

const bubbleSort = document.querySelector("#bubble");

const selectionSort = document.querySelector("#selection");

const insertionSort = document.querySelector("#insertion");

const mergeSort = document.querySelector("#merge");

const quickSort = document.querySelector("#quick");

const numberOfBars = range.valueAsNumber;

//deleteChild function to delete old divs

const deleteChild = () => {
  bars.innerHTML = "";
};

// generateArray function to generate new random array

const generateNewArray = (noOfBars = 60) => {
  let array = [];

  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  console.log(array);



  for (let j = 0; j < noOfBars; j++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[j]*5}px`;
    console.log(array[j]);
    bar.classList.add("bar");
    bar.classList.add(`barNo${j}`);
    bars.appendChild(bar);
  }
};

deleteChild();
generateNewArray(100);
