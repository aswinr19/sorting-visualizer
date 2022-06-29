
async function mergeSort(){
    
}


const mergeSortBtn = document.querySelector("#merge");


mergeSortBtn.addEventListener("click", async function () {
    console.log("clicked");
  
    disableNewArrayBtn();
    disableSizeSlider();
    disableSortingBtns();
    await mergeSort();
    enableNewArrayBtn();
    enableSizeSlider();
    enableSortingBtns();
  });
  