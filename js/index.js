//accessing neccessory dom elements

const bars = document.querySelector("#bars");

const range = document.querySelector("#range");

const newArray = document.querySelector("#generate");

const numberOfBars = range.valueAsNumber;

const waitFor = (millisec = 250) => {
  console.log("inside wait");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, millisec);
  });
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

console.log(numberOfBars);

//generate random array when new array button is clicked
newArray.addEventListener("click", function () {
  deleteChild();
  generateNewArray(numberOfBars);
});

range.addEventListener("change", function () {
  window.location.reload();
});
