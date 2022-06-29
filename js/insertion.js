async function insertionSort(){
    
}


const insertionSortBtn = document.querySelector("#insertion");


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
  