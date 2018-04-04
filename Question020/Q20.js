/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length %2 !=0) return false;
    else if (s.length ==0) return true;
    var stack = [];
    s = s.split('');
    for (let i =0;i<s.length;i++){
        if(s[i]=="["||s[i]=="{"||s[i]=="("){
            stack.push(s[i]);
        }
        else if(stack[stack.length-1]=="["&&s[i]=="]"){
          stack.pop();
        }
        else if(stack[stack.length-1]=="("&&s[i]==")"){
            stack.pop();
        }
        else if(stack[stack.length-1]=="{"&&s[i]=="}"){
            stack.pop();
        }
        else return false;
    }
    return !stack.length;
};


//更好的写法  使得代码更加简洁好看一点
var isValid = function(s) {
    if (s.length %2 !=0) return false;
    else if (s.length ==0) return true;
    var stack = [];
    s = s.split('');
    for (let i =0;i<s.length;i++){
        switch(s[i]){
            case "[":stack.push("]");break;
            case "{":stack.push("}");break;
            case "(":stack.push(")");break;
            default :
                if(stack.pop()!==s[i]) return false;
                break;
        }
    }
    return !stack.length;
};
