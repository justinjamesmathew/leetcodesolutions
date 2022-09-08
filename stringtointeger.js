//not correct yet

var myAtoi = function(s) {
    let r = s.trim();
    let regex = /[0-9]/;
    if (r.length === 0){
        return 0;
    }
    let multiple = 1;
    multiple = r[0] === '-' ?  -1 :  1;
    let str = '';
    
    for(let i= multiple === -1? 1:0, len = r.length; i< len; i++){
        if(r[i].match(regex) === null){
           break; 
        }
        else
            str +=r[i];
    }
    let nanornot = parseInt(str);
    console.log(nanornot);
    if (isNaN(nanornot)){
        return 0;
    }
    else{
    let result = multiple * nanornot;
        console.log(`result = ${result}`);
    return result;
}
};
