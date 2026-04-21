class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const x = {};
        const result = [];

        for (let c = 0; c < nums.length; c++) {
            const num = nums[c];
            const complement = target - num;

            if (x.hasOwnProperty(complement)) {
                result.push(x[complement]);
                result.push(c);

                return result;
            } else {
                x[num] = c;
            }
        }

        return result;
    }
}
