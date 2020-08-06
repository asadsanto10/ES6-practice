const ages = [10, 25, 14, 15];
const ages2 = [19, 24, 13, 17];
const ages3 = [4, 7, 89, 29];
// const allAges = ages.concat(ages2);
const allAges = [...ages, ...ages2,78,  ...ages3]
console.log(allAges);

const max = [10, 45, 90, 150, 57];
const maxArray = Math.max(...max);
console.log(maxArray);