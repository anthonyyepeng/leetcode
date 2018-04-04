/**
 * @param {number} x
 * @return {boolean}
 */

 //算法1 时间复杂度O(1) 空间复杂度？？
 //算法一思想：将其转为字符串然后前后比较
var isPalindrome = function(x) {
    //if(x>2147483648||x<-2147483648){return false;};
    x=x.toString().split('');
    if(x[0]=="-") {return false};
    var i =0;
    var j = x.length-1;
    while(i<=j){
            if(x[i]!=x[j]) {return false;};
            i++;j--;
          }

    return true;
};
//算法2 算法复杂度O(1) 空间复杂度O(1)
//算法二 思想 ： 每次用除法得到第一位 和除10得到最后一位相比较，之后将头尾两位去掉
var isPalindrome = function(x) {
    if (x < 0) return false;
    var d = 1; // divisor
    while (x / d >= 10) d *= 10;
    while (x > 0) {
        int q=Math.floor(x/d);
        int r = x % 10;
        if (q != r) return false;
        x = Math.floor(x % d / 10);
        d /= 100;
    }
    return true;
}
