/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let n = target;
    candidates.sort(function(a,b){return a-b});
    let result = [];
    let temp = [];
    let start = 0;
    return combination(result,candidates,start,temp,n);
};
 function  combination(result,candidates,start,temp,n){
        if(n==0) {result.push(temp.slice());}
        else if(n>0){
            for(start;start<candidates.length;start++){
                if(candidates[start]>n) break;
                temp.push(candidates[start]);
                combination(result,candidates,start,temp,n-candidates[start]);
                temp.pop();
            }
        return result;
    }
 }
