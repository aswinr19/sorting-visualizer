//selection sort logic.
async function selectionSort() {
  console.log("in selection sort");
  const element = document.querySelectorAll(".bar");
  let i;
  let j;
  for (i = 0; i < element.length - 1; i++) {
    let min = i;
    for (j = i + 1; j < element.length; j++) {
     
      element[min].style.background = "red";
      if (
        parseInt(element[j].style.height) < parseInt(element[min].style.height)
      )
        min = j;
      element[min].style.background = "yellow";
    }

    await waitFor(millisec);
    swap(element[i], element[min]);
    element[i].style.background = "green";
    await waitFor(millisec);
    await waitFor(millisec);
  }
  element[element.length - 1].style.background = "green";
}

//accessing the selection sort button.
const selectionSortBtn = document.querySelector("#selection");

//adding the click event listener to selection sort button , diabling other buttons and running selection sort.
selectionSortBtn.addEventListener("click", async function () {
  console.log("clicked");

  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingBtns();
  await selectionSort();
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtns();
});
