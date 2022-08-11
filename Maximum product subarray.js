/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let i = 0;
    let len = nums.length;
   
    let minendinghere = 1;
    let maxendinghere = 1;
  
    let temp = 1;
  
    let globalmax = -1 * Number.MAX_VALUE;
    
    /*
    if num >= 0:
                max_upto_i = max(max_upto_i*num, num)
                min_upto_i = min(min_upto_i*num, num)
                
            else:
                temp_max = max(min_upto_i*num, num)
                min_upto_i = min(max_upto_i*num, num)
                max_upto_i = temp_max
                
            total_max = max(max_upto_i, total_max)
    */
    
    for(i = 0; i < len; i++){
        
        if (nums[i] >= 0){
            maxendinghere = Math.max(maxendinghere*nums[i], nums[i]);
            minendinghere = Math.min(minendinghere*nums[i],nums[i]);
           
        }
        
        else {
            temp = Math.max(minendinghere*nums[i], nums[i]);
            minendinghere = Math.min(maxendinghere * nums[i], nums[i]);
            maxendinghere = temp;
            
            
        }
        
        if (maxendinghere > globalmax)
        globalmax = maxendinghere;
    }
    
        return globalmax;
};
