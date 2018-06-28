/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
//  WHY JAVA IS SO FAST?  0～1ms? is true? or system error?

public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode l3Head = new ListNode(0);
    ListNode p = l1, q = l2, cur =l3Head;
    int carry = 0;//进位

    while (p != null || q != null) {
        int x = (p != null) ? p.val : 0;
        int y = (q != null) ? q.val : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }
    return l3Head.next;
}
}
