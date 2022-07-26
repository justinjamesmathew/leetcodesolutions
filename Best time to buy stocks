/* @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let profit = 0;
    let lowprice = prices[0];
    let tempprofit = 0;
    let len = prices.length;
    for (i = 1; i < len; i++){
        if(prices[i] < lowprice) {
           
            lowprice = prices[i];
        }
        else{
            tempprofit = prices[i]-lowprice;
            if (tempprofit > profit)
                profit = tempprofit;
        }
            
        }
    
    return profit;
};
