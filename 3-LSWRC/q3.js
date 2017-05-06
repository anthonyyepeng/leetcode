/**
 * @param {string} s
 * @return {number}
 */
 /**
 * @param {string} s
 * @return {number}
 */
 //javascript  stack define
 //define a Stack
 function Stack(){
     this.dataStore= [];
     this.top= 0;
     this.push = push ;
     this.pop = pop ;
     this.peek  = peek;
     this.clear = clear;
     this.length = length;
     this.go_through = go_through;
 }
 function push(element){
     this.dataStore[this.top++] = element;

 }
 function peek(){
     return this.dataStore[this.top-1];
 }
 function pop(){
     return this.dataStore[--this.top];

 }
 function clear(){
     this.top = 0;
     this.dataStore.length = 0;
 }
 function length(){
     return this.top;
 }
// 定义遍历
function go_through(word){
        for(var i = 0;i<this.dataStore.length-1;i++){  // 为什么是减一 因为已经比较过栈顶是不同的了 所以减一

            if (word === this.dataStore[i]){
              return false;  //如果有相同的则返回false
            }
        }
        return true;//如果没有相同的 返回true
    }

//define compare word 定义比较新获得的字母是否之前存在相同的
function comparetwoword(target,stack,array,end) {
        while(target<array.length){
            console.log(target);
            if(stack.peek() !== array[target]&&stack.go_through(array[target])==true){
                stack.push(array[target]); //只有当前获得的字母和所有元素都不同时 才执行将这个字母推进栈里
                // console.log(stack);

                console.log('if:'+target);
                target++;
                // comparetwoword(++target,stack,array,end);//递归 继续进行下个字母的比较
            }
            else {
                if(end.length<=stack.dataStore.length){
                    for(var i = 0;i<stack.dataStore.length;i++)
                    {
                        end[i]= stack.dataStore[i];
                    }
                    //如果当前栈里的字符串长度比end长 则将end 替换   不然则舍弃当前栈里的东西
                };
                // console.log(end);

                stack.clear();
                // console.log('b');
                stack.push(array[target]);
                console.log(end);
                console.log("else:"+target);
                target++;
                // comparetwoword(++target,stack,array,end);
            }
        };
        return end;
    };


// main
var lengthOfLongestSubstring = function(s) {
    var stack1 = new Stack();
    var array1 = s.split('');
    var end = new Array();
    var target = 0;
    // define go through this stack
    comparetwoword(target,stack1,array1,end);

    return end.length;



};
