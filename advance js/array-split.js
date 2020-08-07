const nums = [1, 3, 5, 6, 8, 9, 15, 45, 78];
//const part = nums.slice(2, 5);
//console.log(part);

const remove = nums.splice(2, 5);
//const remove = nums.splice(2, 5, 77);
console.log(remove);
console.log(nums);
console.log(nums.join(' '));