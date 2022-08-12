/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let size1 = text1.length;
    let size2 = text2.length;
    
    let dp = new Array(size1 + 1).fill(0).map(x => new Array(size2 + 1).fill(0));
    
    
    for (let i = 1; i <= size1; i++ ){
        for (let j = 1; j <= size2; j++){
            if(text1[i-1] !== text2[j-1]){
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                
            }
            else{
                
                dp[i][j] = dp[i-1][j-1] + 1; 
            }
                
        }
    

    }
   
    return dp[size1][size2];
     
    
};
