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
 //删除栈中的前几位
 function delete(i){
     this.dataStore.splice(0,i+1);
     this.top -= i;
     this.dataStore.length -=i;
 }
// 定义遍历
function go_through(word){
        for(var index = 0;index<this.dataStore.length-1;index++){  // 为什么是减一 因为已经比较过栈顶是不同的了 所以减一

            if (word === this.dataStore[index]){
              return index;  //如果有相同的则返回false
            }
        }
        return true;//如果没有相同的 返回true
    }


//define compare word 定义比较新获得的字母是否之前存在相同的
function comparetwoword(target,stack,array,end) {
        while(target<array.length){
            console.log(target);
            if(stack.peek() !== array[target]&&stack.go_through(array[target])==true){//d
                stack.push(array[target]); //只有当前获得的字母和所有元素都不同时 才执行将这个字母推进栈里
                // console.log(stack);

                console.log('if:'+target);
                target++;
                // comparetwoword(++target,stack,array,end);//递归 继续进行下个字母的比较
            }
            //之前犯了个错误 go through 执行 返回了数字 则只删掉 index 和index之前的
            else {
                if(end.length<stack.dataStore.length){
                    for(var i = 0;i<stack.dataStore.length;i++)
                    {
                        end[i]= stack.dataStore[i];
                    }
                    //如果当前栈里的字符串长度比end长 则将end 替换   不然则舍弃当前栈里的东西
                };
                // console.log(end);

                stack.delete(index);
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


// main对知识的渴望来自于对自身渺小的认知 感觉到的恐惧和不安才能更好的转化为求知欲
var lengthOfLongestSubstring = function(s) {
    var stack1 = new Stack();
    var array1 = s.split('');
    var end = new Array();
    var target = 0;
    // define go through this stack
    comparetwoword(target,stack1,array1,end);

     if(end.length<=stack1.dataStore.length){
                    for(var i = 0;i<stack1.dataStore.length;i++)
                    {
                        end[i]= stack1.dataStore[i];
                    }
                    //如果当前栈里的字符串长度比end长 则将end 替换   不然则舍弃当前栈里的东西
                };
    console.log(end);
    return end.length;



};
