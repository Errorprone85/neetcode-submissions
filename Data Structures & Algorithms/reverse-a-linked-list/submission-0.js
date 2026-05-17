/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        return this.recurse(head, null);
    }

    recurse(curr, prev) {
        if (!curr) {
            console.log('max depth reached');

            return prev;
        }

        const newHead = this.recurse(curr.next, curr);

        curr.next = prev;

        return newHead;
    }
}
