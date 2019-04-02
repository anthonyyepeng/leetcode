/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let Maxarea = 0;
    let left = 0;
    let right = height.length-1;
    while(left<right){
        if(height[left]<height[right])  {
            Maxarea = Math.max(Maxarea,height[left]*(right-left));
            left++;
        }
        else{
            Maxarea = Math.max(Maxarea,height[right]*(right-left));
            right--;
        }
     }
    return Maxarea;
};
