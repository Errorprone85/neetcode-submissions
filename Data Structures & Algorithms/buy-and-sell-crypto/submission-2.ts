class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let c = 0; c < prices.length; c++) {
            if (prices[c] < minPrice) {
                minPrice = prices[c];
            }

            if (prices[c] - minPrice > maxProfit) {
                maxProfit = prices[c] - minPrice;
            }
        }

        return maxProfit;
    }
}
