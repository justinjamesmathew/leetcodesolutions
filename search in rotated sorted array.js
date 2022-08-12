/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let i = 0;
    let pivotindex = -1;
    let targetindex = -1;
    let len = nums.length;
   
    pivotindex = findPivot(nums,0,len);
    console.log(pivotindex);
    

    
    if (target == nums[pivotindex]){
        targetindex = pivotindex;
        return targetindex;
    }
    
    if (pivotindex == -1){
        targetindex = binarySearch(nums,0,len,target);
        return targetindex;
    }
    
    
    targetindex = binarySearch(nums,pivotindex + 1, len,target);
    if(targetindex == -1)
        targetindex = binarySearch(nums,0,pivotindex,target);
    else 
        return targetindex;    
    return targetindex;
};

function binarySearch(nums, low, high, target){
        let targetindex_bin = -1;
        if (high < low){
            targetindex_bin = -1;
            return targetindex_bin;
        }
        
        let mid = Math.floor((low + high)/2);
        
        
        if (target == nums[mid])
            targetindex_bin = mid;
        
        if (target > nums[mid])
            targetindex_bin = binarySearch(nums,mid+1,high,target);
        if (target < nums[mid])
            targetindex_bin = binarySearch(nums,low,mid-1,target);
        
return targetindex_bin;
}

function findPivot(nums,low,high){
        
        if (low > high)
            return -1;
        if (low == high)
            return low;
        
        let mid = Math.floor((low + high)/2);
        
        if ((mid < high) && nums[mid] > nums[mid + 1])
            return mid;
        if (mid > low && nums[mid] < nums[mid - 1])
            return mid-1;
        
        if (nums[low] >= nums[mid])
            return findPivot(nums,low,mid-1);
        else
            return findPivot(nums,mid+1,high);
       
}
