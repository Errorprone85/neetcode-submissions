class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        let returnVal = '';

        for (const str of strs) {
            returnVal += `${str.length}#${str}`;
        }

        return returnVal;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];

        const returnVal = [];

        let lastDelimiterPosition = 0;
        for (let c = 0; c < str.length; c++) {
            const curr = str[c];

            if (curr === '#') {
                const sub = str.substring(lastDelimiterPosition, c);
                const len = Number.parseInt(sub);
                lastDelimiterPosition = len + c + 1;
                
                let decodedVal = str.slice(c + 1, c + 1 + len);
                returnVal.push(decodedVal);
                c += len;
            }
        }

        return returnVal;
    }
}
