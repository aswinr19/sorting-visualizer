
async function partitionLomuto(ele, l, r){
 
  let i = l - 1;
  // color pivot element
  ele[r].style.background = 'red';
  for(let j = l; j <= r - 1; j++){
    
      // color current element
      ele[j].style.background = 'yellow';
      // pauseChamp
      await waitFor(delay);

      if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
         
          i++;
          swap(ele[i], ele[j]);
          // color 
          ele[i].style.background = 'orange';
          if(i != j) ele[j].style.background = 'orange';
          // pauseChamp
          await waitFor(delay);
      }
      else{
          // color if not less than pivot
          ele[j].style.background = 'pink';
      }
  }
  i++; 
  // pauseChamp
  await waitFor(delay);
  swap(ele[i], ele[r]); // pivot height one
  console.log(`i = ${i}`, typeof(i));
  // color
  ele[r].style.background = 'pink';
  ele[i].style.background = 'green';

  // pauseChamp
  await waitFor(delay);
  
  // color
  for(let k = 0; k < ele.length; k++){
      if(ele[k].style.background != 'green')
          ele[k].style.background = 'cyan';
  }

  return i;
}

async function quickSort(ele, l, r){

  if(l < r){
      let pivot_index = await partitionLomuto(ele, l, r);
      await quickSort(ele, l, pivot_index - 1);
      await quickSort(ele, pivot_index + 1, r);
  }
  else{
      if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
          ele[r].style.background = 'green';
          ele[l].style.background = 'green';
      }
  }
}


const quickSortBtn = document.querySelector("#quick");

quickSortBtn.addEventListener("click", async function () {
  console.log("clicked");
  let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;

  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingBtns();
  await quickSort(ele, l, r);
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtns();
});
