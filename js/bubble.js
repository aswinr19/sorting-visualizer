

const bubbleSort = () =>{


    console.log("In bubble sort");
    const element = document.querySelectorAll(".bar");

    for(let i = 0 ;i<element.length-1;i++){
        for(let j=0;j<element.length-i-1;j++){

            element[j].style.color = "red";
            element[j+1].style.height = "red";
            if(parseInt(element[j].style.height) > parseInt(element[j+1].style.height)){

                wait(250);
                let temp = element[j].style.height;
                element[j].style.height = element[j+1].style.height
                element[j+1].style.height = temp;
            }
        }
    }


}


const bubbleSortBtn = document.querySelector("#bubble");

bubbleSortBtn.addEventListener("click",function(){

    console.log("clicked");
    bubbleSort();
});


