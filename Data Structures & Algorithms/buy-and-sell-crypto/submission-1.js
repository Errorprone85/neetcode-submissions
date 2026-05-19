class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length === 0) return;

        let minPrice = Infinity;
        let maxProfit = 0;

        for (let c = 0; c < prices.length; c++) {
            const currPrice = prices[c];
            
            if (currPrice < minPrice) {
                minPrice = currPrice;
            }

            const currProfit = currPrice - minPrice;

            if (currProfit > maxProfit) {
                maxProfit = currProfit;
            }
        }

        return maxProfit;
    }
}
