/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let len = strs.length;
    let coll = [];
    coll[0] = [];
    
    if (strs.length > 0){
        coll[0][0] = strs[0];
    }
    
    
    for (let i =1; i< len; i++){
        let flag = false;
        for(let j = 0; j < coll.length; j++){
            if(isAnagram(strs[i],coll[j][0])){
               coll[j].push(strs[i]);
                flag = true;
                break;
               }
            
         } 
    if (flag == false){
        let collen=coll.length;
        coll[collen] = [];
        coll[collen][0] = strs[i];
    }           
              
    }
    //  for all first element of array in collection
    //       if str is anagram
    //             update array in collection
    //       else
    //              add new array in collection
    //  return collection
return coll;
};
function isAnagram(s, t) {
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
