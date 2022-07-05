var canJump = function(nums) {
    let len = nums.length;
    let tab = new Array(len).fill(false);
    if (len == 1)
        return true;
    if (nums[0] > 0){
        tab[0] = true;
    }
    for (let i= 0; i < len; i++)
        {
            if(nums[i] > 0 && tab[i] == true){
                for (let j = 1; j <= nums[i]; j++)
                    if (i+j < len)
                        tab[i+j] = true;
            }
        }
    return tab[len - 1]
};
