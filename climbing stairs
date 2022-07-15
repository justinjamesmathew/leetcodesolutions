/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let ways = 0;
    let temp1 = 1;
    let temp2 = 2;
    let i = 2;
    if (n == 1)
        return 1;
    if (n == 2)
        return 2;
    if (n > 2){
        for (i = 2; i < n; i++){
            
            ways = temp1 + temp2;
            temp1 = temp2;
            temp2 = ways;
        }  
    }
    return ways;
};
