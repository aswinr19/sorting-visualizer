//insertion sort logic.
async function insertionSort() {
  console.log("In insertion sort");
  const element = document.querySelectorAll(".bar");

  for (let i = 1; i < element.length ; i++) {
    value = element[i].style.height;
    let hole = i;
    while (
      hole > 0 &&
      parseInt(element[hole - 1].style.height) > parseInt(value)
    ) {
     
      element[hole].style.height = element[hole - 1].style.height;
   
      hole--;
    }
    await waitFor(millisec);
    element[hole].style.height = value;
    element[i].style.background = "green";
  }
  element[0].style.background = "green";
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
