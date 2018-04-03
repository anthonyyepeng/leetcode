/**
 * @param {string} s
 * @return {number}
 */


//这个算法里面大量使用了javscript里面自带的 字符串截取 等功能
// 可以过测试 但是 我更想研究q3.js
// 尽量少使用javascript的原生的函数方法 自己实现和实验一些东西

var lengthOfLongestSubstring = function(s) {
    var a="",
    
    max="",
    sl=s.length;
    for(var i=0;i<sl;i++){
        var sSub=s.substr(i,1);
        var index=a.indexOf(sSub);
        if(index===-1){
            a+=sSub;
        }
        else{
            a=a.substring(index+1)+sSub;
        }

        if(max.length<a.length){
            max=a;
        }
    }
    return max.length;
};
