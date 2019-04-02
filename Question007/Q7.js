/**
 * @param {number} x
 * @return {number}
 */
 //将其转化为字符串之后然后头尾相交换 使用了辅助空间
var reverse = function(x) {
     var a = [];
    var b = [];
    // if(x > 1073741824||x<-2147483648){
    //     return 0;
    // }
    x=x.toString();
    a = x.split('');
    var j = 0;
    var i =a.length-1;
    var flag;
    var flag2;
    while(a[i]=="0"){
            i--;
          }
    for(i;i>=0;i--){
        if(a[i]=="-") flag = false;
        b[j]=a[i];
        j++;
    }
    b=b.join("");
    b= parseInt(b);
    flag2=isNaN(b);
    if(flag2==true||b>2147483648||b<-2137483648){
        b=0;
    }
    if (flag==false){
        b=-b;
    }
    return b;
};
