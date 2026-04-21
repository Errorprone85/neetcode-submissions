class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const x = {};

        for (const num of nums) {
            if (x.hasOwnProperty(num)) return true;

            x[num] = num;
        }

        return false;
    }
}
