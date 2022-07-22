
async function partitionLomuto(ele, l, r){
 
  let i = l - 1;
  
  ele[r].style.background = 'red';
  for(let j = l; j <= r - 1; j++){
    
     
      ele[j].style.background = 'yellow';
   
      await waitFor(millisec);

      if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
         
          i++;
          swap(ele[i], ele[j]);
          
          ele[i].style.background = 'orange';
          if(i != j) ele[j].style.background = 'orange';
     
          await waitFor(millisec);
      }
      else{
         
          ele[j].style.background = 'pink';
      }
  }
  i++; 

  await waitFor(millisec);
  swap(ele[i], ele[r]); 
  console.log(`i = ${i}`, typeof(i));

  ele[r].style.background = 'pink';
  ele[i].style.background = 'lightgreen';

  await waitFor(millisec);
  

  for(let k = 0; k < ele.length; k++){
      if(ele[k].style.background != 'lightgreen')
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
          ele[r].style.background = 'lightgreen';
          ele[l].style.background = 'lightgreen';
      }
     
  }
  
}

async function colorElements(ele){
  for(let k = 0; k < ele.length; k++){
    
        ele[k].style.background = 'green';
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
  await colorElements(ele);
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtns();
});
