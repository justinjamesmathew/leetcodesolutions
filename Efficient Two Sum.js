/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const nummap = new Map();
    let twoindex = [];
    let len = nums.length;
    for (let i=0;i<len;i++){
        nummap.set(nums[i],i);
    }
    
    for (i=0;i<len;i++){
        let req = target - nums[i];
        if (nummap.has(req) && nummap.get(req)!=i){
            twoindex.push(i);
            twoindex.push(nummap.get(req));
        if (twoindex != null)
            return twoindex;
        }
        }

};
