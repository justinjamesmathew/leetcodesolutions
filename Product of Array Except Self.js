/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let i = 0;
    let temp=1;
    let answer=[];
    let len = nums.length;
    for(i = 0; i < len; i++){
        answer[i] = temp;
        temp *= nums[i];
    }
    temp = 1;
    for (i = len - 1; i >= 0; i--){
        answer[i] *= temp;
        temp *=nums[i]; 
    }
        
    
return answer;
};
