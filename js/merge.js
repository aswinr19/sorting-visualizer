


const mergeSortBtn = document.querySelector("#merge");

mergeSortBtn.addEventListener("click", async function () {
  console.log("clicked");

  const element = document.querySelectorAll(".bar");

  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingBtns();
  await mergeSort(element);
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtns();
});
