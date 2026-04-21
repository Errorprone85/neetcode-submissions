class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const x = new Map();
        const result = [];

        for (let c = 0; c < nums.length; c++) {
            const num = nums[c];
            const complement = target - num;

            if (x.has(complement)) {
                result.push(x.get(complement));
                result.push(c);

                return result;
            } else {
                x.set(num, c);
            }
        }

        return result;
    }
}
