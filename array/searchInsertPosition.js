/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   for( let i = 0; i<= nums.length - 1; i++){
    if(target <= nums[i]){
        return i;
    }
   } 
   return nums.length;
};

// Optimized
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        else if (target < nums[mid]) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return start;
};