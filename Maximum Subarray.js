/*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let i = 0;
    let len = nums.length;
    let temp = 0;
    let localmax = 0;
    let globalmax = -1 * Number.MAX_VALUE;
   
    for (i = 0; i < len; i++){
       temp = nums[i] + localmax;
       if (nums[i] >  temp)
           localmax = nums[i];
       
        else
            localmax = temp;
    
        if (localmax > globalmax)
            globalmax = localmax;          
    }
    
    return globalmax;
};
