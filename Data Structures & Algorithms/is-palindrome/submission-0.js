class Solution {
    isAlphaNumeric(code) {
        if (!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)) {

            return false;
        }

        return true;
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLocaleUpperCase();
        const arr = [];

        for (let c = 0; c < s.length; c++) {
            const code = s.charCodeAt(c);
            
            if (this.isAlphaNumeric(code)) {
                arr.push(code);
            }
        }

        let leftIndex = 0, rightIndex = arr.length - 1;

        while (leftIndex < rightIndex) {
            const left = arr[leftIndex];
            const right = arr[rightIndex];

            if (left !== right) return false;

            leftIndex++;
            rightIndex--;
        }

        return true;
    }
}
