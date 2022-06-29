async function bubbleSort() {
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
        await waitFor(millisec);
        swap(element[j], element[j + 1]);
      }
      element[j].style.background = "yellow";
      element[j + 1].style.background = "yellow";
    }
    element[element.length - 1 - i].style.background = "green";
  }
  element[0].style.background = "green";
}

const bubbleSortBtn = document.querySelector("#bubble");

bubbleSortBtn.addEventListener("click", async function () {
  console.log("clicked");

  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingBtns();
  await bubbleSort();
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtns();
});
