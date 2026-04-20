/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if (pairs.length === 0) return [];
        
        const result = [[...pairs]];

        for (var c = 1; c < pairs.length; c++) {
            for (let i = c; i > 0; i--) {
                const curr = pairs[i];
                const prev = pairs[i - 1];

                if (curr.key < prev.key) {
                    pairs[i - 1] = curr;
                    pairs[i] = prev;
                }
            }

            result.push([...pairs]);
        }

        return result;
    }
}
