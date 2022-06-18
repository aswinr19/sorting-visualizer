let array = [];

const generateArray = () => {

    for (let i = 0; i < 200; i++) {

        let random = Math.floor(Math.random() * 100);
      
        array.push(random);
      }

}

generateArray();

const newArray = document.querySelector(".generate");

newArray.addEventListener("click",generateArray());

const bars = document.querySelector("#bars");

array.forEach((value, index) => {

  bars.innerHTML += `<div class="bar" style=height:${value*5}px></div>`;



});
