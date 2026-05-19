class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = {};

        for (let c = 0; c < nums.length; c++) {
            if (seen[nums[c]]) return true;

            seen[nums[c]] = true;
        }

        return false;
    }
}
