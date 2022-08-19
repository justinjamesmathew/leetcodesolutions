var isPalindrome = function(s) {
    s=s.replace(/[^0-9a-z]/gi,'');
    s=s.toLowerCase();
    
    let len=s.length;
    let halflen = len/2;
    if (len === 0){
        return true;
    }
    
    for (let i = 0; i< halflen; i++){
        if(s[i] != s[len-i-1])
                return false;
            
    }
    
    return  true;
                
};
