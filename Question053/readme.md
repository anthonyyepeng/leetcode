#53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Example:

>Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.


Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


解题思路： 动态规划方法
>本题为求最大子数组和，那么以题例数组[-2,1,-3,4,-1,2,1,-5,4]
从-2开始，加上1 是<1的，也就是说1前面那一段和为负，可以舍去，
那么可以抛弃前面一段，从1开始计算，同时存储两个值，
一个是：当前累加值，另一个是历史最大值
每次向后走时，将当前累加值与当前指向的值相加，并与当前值比较，保存更大的值
并且与历史最大值比较，更新历史最大值，
当遍历完一遍数组之后，历史最大值即为我们所求的最大和



***

<a href="https://github.com/anthonyyepeng/leetcode">github 链接</a><br/>

<a href="https://www.jianshu.com/u/98e0133e333e">个人简书</a><br/>

`code `<br/>

`javascript`<br/>

`Algorithm`<br/>

copyright&copy;anthonyyepeng
