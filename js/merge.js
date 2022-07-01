async function merge(elm, l, m, h) {
  const n1 = m - l + 1;

  const n2 = h - m;

  const left = new Array(n1);
  const right = new Array(n2);

}

async function mergeSort(element, low, high) {
  if (low >= high) {
    return;
  } else {
    const mid = low + Math.floor((high - low) / 2);
    await mergeSort(element, low, mid);
    await mergeSort(element, mid + 1, high);
    await merge(element, low, mid, high);
  }
}

const mergeSortBtn = document.querySelector("#merge");

mergeSortBtn.addEventListener("click", async function () {
  console.log("clicked");

  const element = document.querySelectorAll(".bar");

  const low = 0;
  const high = element.length - 1;
  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingBtns();
  await mergeSort(element, low, high);
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtns();
});
