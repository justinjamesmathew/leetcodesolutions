/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    for (let coin of coins){
        for (let i = 1; i < table.length; i++){
            if(coin <= i){
                let idx = i - coin;
                let numcoin =  table[idx] + 1;
                table[i] = Math.min(numcoin, table[i]);
                
                
            }
             
        }
       
    }
    
    return table[amount] === Infinity ? -1: table[amount];
    
};
