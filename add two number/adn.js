// linklist add
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 时间复杂度O(n^2)  空间复杂度 O(n)
var addTwoNumbers =function(l1,l2){
    var sum = l1.val+l2.val;
    var listP1= l1.next;
    var listP2= l2.next;
    var l3 = new ListNode(sum%10);
    var listP3 = l3;
    sum = Math.floor(sum/10);
    while(listP1||listP2||sum!==0){
        sum = sum+(listP1?listP1.val:0)+(listP2?listP2.val:0);
        listP3.next = new listNode(sum%10);
        listP3 = node.next;
        listP1 = listP1?listP1.next:null;
        listP2 = listP2?listP2.next:null;
        sum = Math.floor(sum/10);
    }
    return l3;
}
