const nums = [1,3,4,5,7,9,56,56];
for(let i = 0; i < nums.length; i++){
    
    if(nums[i] > 5){
        break;
    }
    console.log(nums[i]);
}


const nums = [1, -3, 4, -5, 7, -9, -56, 56];
for (let i = 0; i < nums.length; i++) {

    if (nums[i] < 0) {
        continue;
    }
    console.log(nums[i]);
}