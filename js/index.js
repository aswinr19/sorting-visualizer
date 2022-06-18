let array = [];

const generateArray = () => {

    for (let i = 0; i < 100; i++) {

        let random = Math.floor(Math.random() * 100);
      
        array.push(random);
      }

}

generateArray();


const bars = document.querySelector("#bars");

array.forEach((value, index) => {

  bars.innerHTML += `<div class="bar"></div>`;

});
