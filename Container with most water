/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let len = height.length, j = len - 1;
    let max = 0;
    let temp = 0;
    while (i < j){
       let n = j - i;
        if(height[i] < height[j]){
            temp = height[i] * n;
            i++;
        }
        else {
            temp = height[j] * n;
            j--;
        }
            
            
        if (temp > max)
            max = temp; 
            
    }
    return max;
    
};
