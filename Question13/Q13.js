/**
 * @param {string} s
 * @return {number}
 */
//时间复杂度为O(n) 空间复杂度为O(1)
//了解罗马数字即可
var romanToInt = function(s) {
    s = s.split('');
    var i=0;
    var result =0;
    while(i<=s.length-1){
        switch(s[i]){
            case "D":result+=500;break;
            case "L":result+=50;break;
            case "V":result+=5;break;
            case "M":result+=1000;break;
            case "C":
                if(s[i+1]=="D"||s[i+1]=="M")result-=100;
                else result+=100;
                break;
            case "X":
                if(s[i+1]=="L"||s[i+1]=="C")result-=10;
                else result+=10;
                break;
            case "I":
                if(s[i+1]=="V"||s[i+1]=="X")result-=1;
                else result+=1;
                break;
            default:return 0;break;
        }
        i++;
    }
    return result;
};
