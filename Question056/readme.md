#56. Merge Intervals
Given a collection of intervals, merge all overlapping intervals.
Example1:

>Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example1:

>Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

***

>解题思路：
将数组中所有元素按开始时间排序,
从开始时间遍历
将第0个放入结果数组
然后从第一个开始比较，如果第1个开始时间大于res 的结束时间，那么这两个区间不能合并，将当前的区间压入结果数组res
否则可以合并这两个区间，将结果数组里的最后一个区间的结束时间改为当前区间的结束时间与最后一个区间的结束时间的最大值

<a href="https://github.com/anthonyyepeng/leetcode">github 链接</a><br/>

<a href="https://www.jianshu.com/u/98e0133e333e">个人简书</a><br/>

`code `<br/>

`javascript`<br/>

`Algorithm`<br/>

copyright&copy;anthonyyepeng
