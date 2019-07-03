var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        ans = Math.max(nums[i], ans + nums[i]);
        sum = Math.max(sum, ans);
    }
    return sum;

};
