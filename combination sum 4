var combinationSum4 = function(nums, target) {
    //create a array of of length target + 1.
    // this array will be populated from bottom up fashion 
    // how many ways the elements of nums add up to target
    //and every number lesser than target
    
    //make the first element 1 for the array and remaining elements 0
    // then check each value say i less than target
    // find a number lesser than the i in nums array
    //if present then add the value of array element[i-num[j]] to sum;
    // at the end array element = sum and make sum = 0 for next iteration
    
    const targetarr = new Array(target+1).fill(0);
    targetarr[0] = 1;
    let len = nums.length;
    for (let i = 1; i <= target; i++){
        let sum = 0;
        for(let j = 0; j < len ;j++){
            if(i >= nums[j]){
                sum += targetarr[i-nums[j]];
            }
            targetarr[i] = sum;
        }
    }
    return targetarr[target];
};
