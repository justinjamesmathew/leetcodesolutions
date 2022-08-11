/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and 
it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
*/
//To decide whether to rob the house say nth, keep the sum upto previous(n-1) and previous-to-previous(n-2) house and 
// keep the maximum of [ previous , (previous-previous + current)]

var rob = function(nums) {
    let previous = 0;
    let beforePrevious = 0;
    
    for(let i = 0; i < nums.length; i++){
        let tmp = previous;
        previous = Math.max(nums[i] + beforePrevious, previous);
        beforePrevious = tmp;
    }
    
    return previous;
};
