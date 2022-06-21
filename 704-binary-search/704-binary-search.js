/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lower = 0
    let upper = nums.length - 1
    
    while(lower <= upper){
        const middle = lower + Math.floor((upper - lower) / 2)
        if(target===nums[middle]){
            return middle
        }
        else if(target < nums[middle]){
            upper = middle -1
        }
        else{
            lower = middle + 1
        }
    }
    
    return -1
};