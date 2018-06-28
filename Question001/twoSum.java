// leetcode for java //twoSum.
// some question
//1.java 运行速度极快
// 2.并不能找出所有的zu he
// 时间复杂度 O(n^2) 与js相同 但是速度快很多？
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] == target - nums[i]) {
                    return new int[] { i, j };
                }
            }
        }
    throw new IllegalArgumentException("No two sum solution");

    }
}
