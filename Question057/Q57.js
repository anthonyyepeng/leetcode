/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length<1) return [newInterval];
    const res =[newInterval];
    for(let i =0;i<intervals.length;i++){
        const interval = intervals[i];
        const last = res.pop();
        if(interval[1]<last[0])
        {
            res.push(interval);
            res.push(last)
        }
        else if(interval[0]>last[1]){
            res.push(last)
            while(i<intervals.length){
                res.push(intervals[i]);
                i++;
            }
        }
        else {
            res.push([Math.min(interval[0],last[0]),Math.max(interval[1],last[1])])
        }
    }
    return res
};
