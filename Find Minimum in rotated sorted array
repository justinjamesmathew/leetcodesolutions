/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0;
    let len = nums.length;
    let temp = 0;
    let minvalue = Number.MAX_VALUE;
    
    for (i = 0; i < len; i++){
        if(nums[i] > nums[i+1])
           return nums[i+1];
        
        else
            {   temp = nums[i];
                if (temp < minvalue)
                    minvalue = temp;
            }
        
        
    }
  return minvalue;  
};
