var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if (len === 0)
        return 0;
   
    let globalmax = 0;

    for (let i = 0; i < len; i++){
        let temp = s[i];
        for (let j = i+1; j < len; j++){
            let flag = 0;
            for(let k=0; k < temp.length; k++){
                if(s[j] == temp[k])
                    flag = 1;
                }
            if (flag === 0){
                temp += s[j];
                
            }
            else
                break;
        
            }
        if (temp.length > globalmax){
                globalmax = temp.length;
                
        }
    }
   
    return globalmax;
};
