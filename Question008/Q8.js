/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let i = 0;
    let result = 0;
    while(str[i]==" "){
        i++;
    };
    for(i;i<str.length;i++){
        switch(str[i]){
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                //console.log(str[i]);
                console.log(result);
                result*=10;
                result += 1*str[i];
                break;
            case " ":
                break;
            case "+":
            default:
                return result;
               }
    }
    return result;
};
