class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        const temp1 = s.split('').sort().join('');
        const temp2 = t.split('').sort().join('');

        return temp1 === temp2;
    }
}
