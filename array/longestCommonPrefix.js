/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let firstSrts = strs[0];
    for(let i = 0; i <= firstSrts.length-1; i++){
      let currentChar = firstSrts[i]
      for(let z = 1; z < strs.length; z++){
        if(strs[z][i] != currentChar ){
            return prefix
        }
      }
      prefix += currentChar
    }
    return prefix
};
