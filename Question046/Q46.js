/**
 * @param {number[]} nums
 * @return {number[][]}
 */
    var permute = function(nums) {
        let result = [];
        let temp = new Array();
        let start = 0;
        var a = combination(result,start,nums,temp);
        return a;
    };
    Array.prototype.swap = function (x,y) {
        var b = this[x];
        this[x] = this[y];
        this[y] = b;
        return this;
    }
    function combination(result,start,nums,temp){
        if(start==nums.length) result.push(temp.slice());
        else
            for(let i = start ;i<nums.length;i++){
                nums.swap(start,i);
                temp.push(nums[start]);
                combination(result,start+1,nums,temp);
                temp.pop(nums[start]);
                nums.swap(start,i);
            }
        return result;
    }
