class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const temp1 = s.split('').sort().join('');
        const temp2 = t.split('').sort().join('');

        return temp1 === temp2;
    }
}
