async function merge(leftArr,rightArr){
	const output = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while(leftIndex < leftArr.length && rightIndex < rightArr.length){
		const lefftEl = leftArr[leftIndex];
		const rightEl = rightArr[rightIndex];

		if(leftEl < rightEl){
			output.push(leftEl);
			lefftIndex++;
		}
		else 
		{
			output.push(rightEl);
			rightIndex++;
		}
	}
	return [...output , ...leftArr.slice(lefftIndex) , ...rightArr.slice(rightIndex)];
}


async function mergeSort(element){
	if(element.length <= 1){
		return ;
	}
	const middleIndex = Math.floor(array.length/2);
	const leftArr = element.slice(0,middleIndex);
	const rightArr = element.slice(middleIndex);
	return merge(
		mergeSort(leftArr);
		mergeSort(rightArr);
	);
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
