//解法思路：

var merge = function(intervals) {
    let Start =[];
    let End = [];
    let res=[];
    let PointOfStart = 0;
    let PointOfEnd = 0;
    for(let i = 0 ;i<intervals.length;i++){
        Start[i] = intervals[i].start;
        End[i] = intervals[i].end;
    };
    Start.sort((a,b)=>a-b);
    End.sort((a,b)=>a-b);
    while(PointOfStart<Start.length){
        if (PointOfStart == Start.length - 1 || Start[PointOfStart + 1] > End[PointOfStart]) {

            res.push(new Interval(Start[PointOfEnd], End[PointOfStart]));
            PointOfEnd = PointOfStart + 1;
        }
        PointOfStart++;
    }
    return res;
};
// update 7.3
// input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
//
var merge = function(intervals){
  const res = [];
  if(intervals.length<=1){
    return intervals
  }
  intervals.sort((a,b)=>{
    return a[0]>b[0]?1:-1;
  })
  res.push(intervals[0]);
  for(let i =1;i<intervals.length;i++){
    const interval = intervals[i];
    const last = res.pop();
    if(interval[0]>last[1]){
      res.push(last);
      res.push(interval)
    }
    else{
      last[1] = Math.max(last[1],interval[1])
      res.push(last)
    }
  }
  return res;
}
