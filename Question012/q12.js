/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
   // 1000;900;500;400;100;90;50;40;10;9;5;4;1;
   //  M,  CM, "D" "CD","C", "XC","L", "XL", "X", "IX", "V", "IV", "I"
    var result = "";
    var Inter = [1000, 900, 500, 400, 100, 90,50, 40, 10, 9, 5, 4, 1];
    var Roman = ["M", "CM", "D", "CD", "C", "XC","L", "XL", "X", "IX", "V", "IV", "I"];
    for (let i = 0;num>0;i++){
       let j =Math.floor(num/Inter[i]);
       num %= Inter[i];
       for(j;j>0;j--){
           result+=Roman[i];
       }
    }
    return result;
};
