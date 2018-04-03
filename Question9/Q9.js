/**
 * @param {number} x
 * @return {boolean}
 */

 //算法1 时间复杂度O(1) 空间复杂度？？
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
