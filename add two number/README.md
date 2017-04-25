#ADD TWO NUM#






You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
***
>Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

<a href="https://github.com/anthonyyepeng/leetcode/twoSum">github 链接</a>

*copyright&copy;anthonyyepeng*
**swdww**


//try to use java script
`code `
```javascript```

length1 =nums.length-1;
console.log(length1);
for(j;j<=length1;j++){
     if(nums[i]+nums[j]!=target&&j==length1&&i<length1){
         i++;j=i;
        }
    else if(nums[i]+nums[j]==target){ var end = [i,j];return(end);break;}
    }
