#57. Insert Intervals
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example1:

>Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example2:

>Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

解题思路：
>本题和上一题比较类似，56题为合并区间，本题为插入区间，其实质是一样的，而且还可以少进行一些处理。
上一题还需要将原数组进行排序，本题不需要排序。
将插入的区间与当前遍历到的区间进行比较，只会有三种情况
不可以合并的情况：
1：待插入区间在现在的区间之前，也就是说待插入区间开始时间晚于现在的区间，
    这种情况可以直接跳过，往下一个区间走
2：待插入区间在现在的区间之前，那么可以结束了，将待插入区间放入结果数组，接着将所有剩余的都放入结果数组即可
可以合并区间的情况：
3:即待插入区间和现在的区间有重合的情况，那么可以将区间进行合并，将两个区间开始时间早的作为新的待插入区间的开始时间，
将结束时间晚的时间新的待插入区间的结束时间。进入下一次遍历。

***
<a href="https://github.com/anthonyyepeng/leetcode">github 链接</a><br/>

<a href="https://www.jianshu.com/u/98e0133e333e">个人简书</a><br/>

`code `<br/>

`javascript`<br/>

`Algorithm`<br/>

copyright&copy;anthonyyepeng
