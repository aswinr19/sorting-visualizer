async function selectionSort() {
  console.log("in selection sort");
  const element = document.querySelectorAll(".bar");
  let i;
  let j;
  for (i = 0; i < element.length - 1; i++) {
    let min = i;
    for (j = i+1; j < element.length; j++) {
      element[min].style.background = "red";
      element[j].style.background = "red";
      if (parseInt(element[j].style.height) < parseInt(element[min].style.height)) min = j;
      element[min].style.background = "yellow";
      element[j].style.background = "yellow";
    }

    await waitFor(millisec);
    swap(element[i], element[min]);
     element[i].style.background = "green";
  }
  element[element.length-1].style.background = "green";
}

const selectionSortBtn = document.querySelector("#selection");

selectionSortBtn.addEventListener("click", async function () {
  console.log("clicked");

  disableSortingBtns();
  await selectionSort();
  enableSortingBtns();
});
