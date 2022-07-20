async function merge(ele,low,mid,high){
	const n1 = mid - low +1;
	const n2 = high - mid;
	let left = new Array(n1);
	let right = new Array(n2);

	for(let i = 0; i < n1; i++){
		await waitFor(millisec);
		ele[low+i].style.background = 'orange';
		left[i] = ele[low +i].style.height;
	}

	for(let i = 0;i<n2;i++){
		await waitFor(millisec);
		ele[mid+1+i].style.background = 'yellow';
		right[i] = ele[mid+1+i].style.height;
	}
await waitFor(millisec);
	while(i<n1&& j<n2){
		await waitFor(millisec);
		
		if(parseInt(left[i]) <= parseInt(right[j])){
		
			if((n1+n2) === ele.length){
				ele[k].style.background = 'green';
			}
			else {
				ele[k].style.background = 'lightgreen';
			}
			ele[k].style.height = left[i];
			i++;
			k++;
		}
		else {
			if((n1+n2) === ele.length){
				ele[k].style.background = 'green';
			}
			else {
				ele[k].style.background = 'lightgreen';
			}
			ele[k].style.height = right[j];
			j++;
			k++;
		}
	}
	while(i <n1){
		await waitFor(millisec);

		if((n1+n2) === ele.length){
			ele[k].style.background = 'green';
		}
		else{
			ele[k].style.background = 'lightgreen';
		}
		ele[k].style.height = left[i];
		i++;
		k++;
	}
	while(j<n2){
		await waitFor(millisec);
		if((n1+n2) === ele.length){
			ele[k].style.background = 'green';
		}
		else{
			ele[k].style.background = 'lightgreen';
		}
		ele[k].style.height = right[j];
		j++;
		k++;
	}
}

async function mergeSort(ele,l,r){
	if(l >= r){
		return;
	}
	const m = l + Math.floor((r-l)/2);
	await mergeSort(ele,l,m);
	await mergeSort(ele,m+1,r);
	await merge(ele,l,m,r);
}
			
		

const mergeSortbtn = document.querySelector("#merge");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
	disableNewArrayBtn();
	disableSizeSlider();
	disableSortingBtns();
    await mergeSort(ele, l, r);
	enableNewArrayBtn();
	enableSizeSlider();
	enableSortingBtns();
});

