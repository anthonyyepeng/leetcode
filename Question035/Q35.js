/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    while(i<nums.length){
        if(nums[i]>=target) return i;
        else i++;
    }
    return i ;
};
