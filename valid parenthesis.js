/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
 /*
 assign a different positive value for opening brackets and negative value for closing brackets.
 for every character in string add the value to an accumulator variable and check if at any time accumalator 
 has negative value. if so return false.
 if at the end accumulator should be 0 return true else false.
 */
var isValid = function(s) {
    c=[];
    c['('] = 5;
    c[')'] = -5;
    c['{'] = 200;
    c['}'] = -200;
    c['['] = 10000;
    c[']'] = -10000;
    
    // a bit of shortcut for cases where the opening and closing is correct but ordered incorrectly
    
    invalidstr = [];
    invalidstr[0]="[)";
    invalidstr[1]="[}";
    invalidstr[2]="(}";
    invalidstr[3]="{)";
    invalidstr[4]="{]";
    invalidstr[5]="(]";
    invalidstr[6]="[([]])"
    
    
    let acc = 0;
    for (let i=0;i<invalidstr.length; i++){
        if (s.includes(invalidstr[i]))
            return false;
    }
    for(let i = 0, len = s.length; i< len; i++){
        acc +=c[s[i]];
        if (acc < 0) {
            return false;
        }
    }
    if (acc === 0){
        return true;
    }
    else
        return false;
    
};
