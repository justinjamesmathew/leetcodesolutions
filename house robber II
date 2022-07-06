//Problem Statement
/* You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. 
That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have a security system connected, 
and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
*/

//In house robber 2, the problem is split into 2 parts either the robber will start with the first house(odd) or the second house(even). 
//depending on that he will be able to rob (or not) the last house.

var rob = function(nums) {
    let len = nums.length;
    if (len == 1){
        return nums[0];
    }
    let oddprev = 0;
    let oddbef = 0;
    let evenprev = 0;
    let evenbef = 0;
    
    for (let i = 0; i < len - 1; i++)
        {
            let temp = oddprev;
            oddprev = Math.max(nums[i]+oddbef, oddprev);
            oddbef = temp;
        }
    for (let i = 1; i < len; i++ )
        {let temp = evenprev;
        evenprev = Math.max(nums[i]+ evenbef, evenprev);
        evenbef = temp;
        }
    return evenprev > oddprev? evenprev: oddprev;
    
      
};
