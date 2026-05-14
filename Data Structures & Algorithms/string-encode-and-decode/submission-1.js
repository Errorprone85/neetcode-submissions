class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';

        const encodedStrings = [];

        for (const str of strs) {
            if (str === '') {
                encodedStrings.push('手');

                continue;
            }

            let encodedString = [];

            for (const c of str) {
                encodedString.push(c.charCodeAt(0));
            }

            encodedStrings.push(encodedString.join('何'));
        }

        return encodedStrings.join("誰");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];

        const newArr = str.split('誰');
        const returnVal = [];

        for (const str of newArr) {
            let decodedString = '';

            for (const c of str.split('何')) {
                if (c === '手') {
                    decodedString += "";

                    continue;
                }
                
                const decodedChar = String.fromCharCode(c);
                if (decodedChar === '\x00') continue;

                decodedString += decodedChar;
            }

            returnVal.push(decodedString);
        }

        console.log(returnVal);

        return returnVal;
    }
}
