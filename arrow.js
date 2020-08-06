//default

// function doubleIt(num){
//     return num *2;
// }   //default

// const doubleIt = function (num) {
//     return num * 2;
// } //default


// ES6 version call and declear function
const doubleIt = (num) => num * 2;
const add = (x, y) => x + y;
const result = doubleIt(5);
console.log(result);
console.log(add(10, 15));

// miltiple
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const resutlDoMtah = doMath(7, 5);
console.log(resutlDoMtah);