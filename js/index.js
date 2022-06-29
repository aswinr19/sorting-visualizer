//accessing neccessory dom elements

const bars = document.querySelector("#bars");

const range = document.querySelector("#range");

const speed = document.querySelector("#speed");

const newArray = document.querySelector("#generate");

let numberOfBars = range.valueAsNumber;

let millisec = 30;

// waitFor function takes a delay as argument
const waitFor = (millisec) => {
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

//deleteChild function to delete old divs
const deleteChild = () => {
  bars.innerHTML = "";
};

// generateArray function to generate new random array
const generateNewArray = (noOfBars) => {
  let array = [];

  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }

  for (let j = 0; j < noOfBars; j++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[j] * 5}px`;
    console.log(array[j]);
    bar.classList.add("bar");
    bar.classList.add(`barNo${j}`);
    bars.appendChild(bar);
  }
};

// generate random array when page first loads
deleteChild();
generateNewArray(numberOfBars);

//generate random array when new array button is clicked
newArray.addEventListener("click", function () {
  deleteChild();
  generateNewArray(numberOfBars);
});

range.addEventListener("input", function () {
  deleteChild();
  generateNewArray(numberOfBars);
});

speed.addEventListener("input", function () {
  millisec = 30 - speed.valueAsNumber;
  console.log("delay:", millisec);
  console.log("delay:", speed.valueAsNumber);
});
