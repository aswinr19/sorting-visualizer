//insertion sort logic.
async function insertionSort() {
  console.log("In insertion sort");
  const element = document.querySelectorAll(".bar");

  for (let i = 1; i < element.length; i++) {
    value = element[i].style.height;
    let hole = i;
    while (
      hole > 0 &&
      parseInt(element[hole - 1].style.height) > parseInt(value)
    ) {
      element[i].style.background = "red";
      element[hole - 1].style.background = "red";
      await waitFor(millisec);
      element[hole].style.height = element[hole - 1].style.height;
   
      element[hole - 1].style.background = "yellow";

      hole--;
    }
    await waitFor(millisec);
    element[hole].style.height = value;
   
  }
  for (let i = 0; i < element.length; i++) {
    await waitFor(millisec);
  element[i].style.background = "green";
  }
}

//accessing insertion sort button.
const insertionSortBtn = document.querySelector("#insertion");

//adding the click event listener to insertion sort button , diabling other buttons and running insertion sort.
insertionSortBtn.addEventListener("click", async function () {
  console.log("clicked");

  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingBtns();
  await insertionSort();
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtns();
});
