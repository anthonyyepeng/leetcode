/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const function CompareMedian(median1,median2){
    var compareflag = "";
    if(median1==median2) compareflag ="equal";
    else median1>median2?compareflag="great":compareflag="less";
    return compareflag;
}
const function findMedian(arr,i,j){

    var medianpoint  = (i+j)/2;
    var median = arr[medianpoint];
    return median;

}
var findMedianSortedArrays = function(nums1, nums2) {
    var low1 = 0,low2=0;
    var high1 = nums1.length-1,high2=nums2.length-1;
    var median1 ;
    var median2 ;
    var flag ;
    while(low1>high1&&low2>high2){
        low1>high1?median1=null:median1 = nums1[Math.floor((low1+high1)/2)];
        low2>high2?median2=null:median2 = nums2[Math.floor((high2+low2)/2)];
        if(median1==null){flag="alone1"}
        else if(median2==null){flag="alone2"}
        else flag = CompareMedian(median1,median2);
        if(flag == "equal") return median1;
        else if(flag=="great"){high1=Math.floor((low1+high1)/2);low2=Math.floor((high2+low2)/2);}
        else if(flag =="less"){low1 = Math.floor((low1+high1)/2);high2=Math.floor((high2+low2)/2);}
        else if(flag == "alone1"){}
        else if(flag == "alone2"){}
    }
    //如果不限制复杂度 这道题好写的很
//     关键是必须要实现使用分治法的思想求解
// 总长度问题
// 偶数与奇数

};
