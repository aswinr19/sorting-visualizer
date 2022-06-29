async function quickSort() {}

const quickSortBtn = document.querySelector("#quick");

quickSortBtn.addEventListener("click", async function () {
  console.log("clicked");

  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingBtns();
  await quickSort();
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtns();
});
