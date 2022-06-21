const swap = (e1, e2) => {
  let temp = e1;
  e1 = e2;
  e2 = temp;
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      swap(array[i], array[i + 1]);
    }
  }

  console.log(array);
};
