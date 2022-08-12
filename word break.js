/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    //create a table of length 1 greater than length of string.
    //make all values of the table false except first element
    // for every word in dictionary 
        //slice the input string from true index to word length (exld) and 
       //check for match. 
    //if match is found mark the table [index + wordlength] as true.
    //return last element of the table.
    
    let table = new Array(s.length + 1).fill(false);
    
    table[0] = true;
    
    for(let i = 0; i <= s.length; i++){
        if(table[i] === true){
			for(let word of wordDict){
				if(s.slice(i, i + word.length) === word){
					table[i + word.length] = true;
                    
                    
				}
			}
		}
    }
   
    return table[s.length];
};
