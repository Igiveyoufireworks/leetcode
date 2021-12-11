/**
 * 给定一个罗马数字，将其转换成整数。
 */
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let arr = s.split('');
    const hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let count = 0;
    for(let i = 0; i < arr.length;){
        if(hash[arr[i]] < hash[arr[i+1]]){
            count += hash[arr[i+1]]-hash[arr[i]];
            i += 2;
        }else{
            count += hash[arr[i]];
            i++;
        }
    }
    return count;
};