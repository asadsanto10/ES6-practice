let number = [3, 4, 6, 7, 9];
// const output = [];

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

//  ////////////// map er moddhe kno kisue ke pass korle se 3 ta jinis output hisibe pass kre 1. element 2. index 3. total array    /////////////////////////////
number.map(function(element, index, array){
    console.log(element, index, array);
});

const result = number.map(function (element, index, array) {
    return element * element;
});
console.log(result);

const result2 = number.map(x => x * x);
console.log(result2);

/***********filter*******************/
const bigger = number.filter(x => x > 5);
console.log(bigger);