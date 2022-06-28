 async function bubbleSort ()  {
  console.log("In bubble sort");
  const element = document.querySelectorAll(".bar");

  for (let i = 0; i < element.length - 1; i++) {
    for (let j = 0; j < element.length - i - 1; j++) {
      element[j].style.background = "red";
      element[j + 1].style.background = "red";
      if (
        parseInt(element[j].style.height) >
        parseInt(element[j + 1].style.height)
      ) {
        await waitFor(2);
        let temp = element[j].style.height;
        element[j].style.height = element[j + 1].style.height;
        element[j + 1].style.height = temp;
      }
    }
    element[element.length-1-i].style.background = "green";

  }
  element[0].style.background = "green";
};

const bubbleSortBtn = document.querySelector("#bubble");

bubbleSortBtn.addEventListener("click", async function () {
  console.log("clicked");
  await bubbleSort();
});
