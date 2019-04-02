/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
   let b = head;
    while(b!=null&&b.next!=null){
        let temp =  b.val;
        let  a = b.next;
        b.val = a.val;
        a.val = temp;
        b = a.next;
    }
    return head;
};
