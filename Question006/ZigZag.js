/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let n = s.length;
    let k =0;
    let result = "";
    let cycleLen = 2 * numRows - 2;
    if(numRows===1) return s;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            result +=s.charAt(j + i);
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < n)
            result += s.charAt(j + cycleLen - i);
            }
        }
    return result;
};
