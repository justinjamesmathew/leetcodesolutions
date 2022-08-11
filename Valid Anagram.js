/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isAnagram = function(s, t) {
    let slen = s.length;
    let tlen = t.length;
    // if the length of the two strings is not equal then it is not an anagram
    if (slen != tlen){
        return false;
    } 
    else{
    
    // for all character in s string if it exists in t string then we remove that character. 
    // if it does not exist return false as it is not a valid anagram.
     
    for (let i = 0; i < slen; i++){
        if(t.indexOf(s[i]) != -1){
           t = t.replace(s[i],''); // replace function in string does not make changes to the orginial string hence assignment is required
        }
        else 
            return false;
    }
    
    }
    return true; // if the loop is successfully executed it is a valid anagram
    
    
};
