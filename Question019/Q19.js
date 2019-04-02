/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let first = head;
    let second = head;
    if(first.next===null) return null;
    while(n>0)
    {
       second = second.next;
        n--;
    };
    if(second===null) return head.next;
    while(second.next!==null)
    {
        second = second.next;
        first = first.next;
    };
    first.next = first.next.next;
    return head;
};
  
