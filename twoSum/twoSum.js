/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*O(n^2) n*(n+1)/2 */
/*can fast?*/
var twoSum = function(nums, target) {
   
    var i=0;
    var j=i+1;
    var length1 =nums.length-1;
    console.log(length1);
    for(j;j<=length1;j++){
         if(nums[i]+nums[j]!=target&&j==length1&&i<length1){
             i++;j=i;
            }
        else if(nums[i]+nums[j]==target){ var end = [i,j];return(end);break;} 
        }
};
