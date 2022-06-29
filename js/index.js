//accessing neccessory dom elements

const bars = document.querySelector("#bars");

const range = document.querySelector("#range");

const speed = document.querySelector("#speed");

const newArray = document.querySelector("#generate");

//default value for number of bars.
let numberOfBars = range.valueAsNumber;

//default value for animation speed.
let millisec = 30 - speed.valueAsNumber;

//disableSortingBtns diables all  sorting buttons when a sorting is going on.
const disableSortingBtns = () => {
  console.log("inside disableSortingBtns");
  document.querySelector("#bubble").disable = true;
  document.querySelector("#insertion").disabled = true;
  document.querySelector("#selection").disabled = true;
  document.querySelector("#quick").disabled = true;
  document.querySelector("#merge").disabled = true;
};

//enableSortingBtns enables all sorting buttons when a sorting is going on.
const enableSortingBtns = () => {
  console.log("inside enableSortingBtns");
  document.querySelector("#bubble").disabled = false;
  document.querySelector("#insertion").disabled = false;
  document.querySelector("#selection").disabled = false;
  document.querySelector("#quick").disabled = false;
  document.querySelector("#merge").disabled = false;
};

//disableSizeSlider disables the number of bar slider when a sorting is going on.
const disableSizeSlider = () => {
  document.querySelector("#range").disabled = true;
};

//enableSizeSlider enable the number of bar slider when a sorting is going on.
const enableSizeSlider = () => {
  document.querySelector("#range").disabled = false;
};

//disableSizeSlider disables the new array button when a sorting is going on.
const disableNewArrayBtn = () => {
  document.querySelector("#generate").disabled = true;
};

//enableSizeSlider enables the new array button when a sorting is going on.
const enableNewArrayBtn = () => {
  document.querySelector("#generate").disabled = false;
};

// waitFor function takes a delay as argument.
const waitFor = (millisec = 30) => {
  console.log("inside wait");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, millisec);
  });
};

//swap function takes two divs as argument and swaps their styles(height).
const swap = (elm1, elm2) => {
  let temp = elm1.style.height;
  elm1.style.height = elm2.style.height;
  elm2.style.height = temp;
};

//deleteChild function to delete old div's.
const deleteChild = () => {
  bars.innerHTML = "";
};

// generateArray function to generate new random array.
const generateNewArray = (noOfBars = 60) => {
  let array = [];

  //creating an array of n random numbers.
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  //adding bars to the dom.
  for (let j = 0; j < noOfBars; j++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[j] * 6}px`;
    console.log(array[j]);
    bar.classList.add("bar");
    bar.classList.add(`barNo${j}`);
    bars.appendChild(bar);
  }
};

// generate random array when page first loads.
deleteChild();
generateNewArray(numberOfBars);

//generate random array when new array button is clicked.
newArray.addEventListener("click", function () {
  deleteChild();
  generateNewArray(numberOfBars);
});

//adding input event to number of bars slidebar to adjust the number of bars.
range.addEventListener("input", function () {
  numberOfBars = range.valueAsNumber;
  deleteChild();
  generateNewArray(numberOfBars);
});

//adding input event to speed slidebar to adjust the speed of animation.
speed.addEventListener("input", function () {
  millisec = 30 - speed.valueAsNumber;
  console.log("delay:", millisec);
  console.log("delay:", speed.valueAsNumber);
});
