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
                
                let decodedVal = '';

                for (let x = c + 1; x < c + len + 1; x++) {
                    decodedVal += str[x];
                }

                returnVal.push(decodedVal);
                c += len;
            }
        }

        return returnVal;
    }
}
