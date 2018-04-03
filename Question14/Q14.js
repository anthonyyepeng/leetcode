/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs==null||strs.length==0) return "";
    var i =1;
    for (i;i<=strs[0].length;i++){//自加截取字符串的长度
        for(let j=1;j<strs.length;j++){//遍历每个字符串比较前几位
           if(strs[j].substr(0,i)!==strs[0].substr(0,i)){return strs[0].substr(0,i-1)};//如果相同则返回前面已比较的字符串
        }

    }
   return strs[0];
};
