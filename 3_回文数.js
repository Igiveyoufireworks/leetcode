/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
 * 示例：
    输入：x = -121
    输出：false
    解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 */
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var flag;
    if(x >= 0){
        var res = parseInt(x.toString().split("").reverse().join(""));
        if (x === res){
            flag = true;
        } else{
            flag = false;
        }
    }else{
        flag = false;
    }
    // 判断越界
    return res > (Math.pow(2,31)-1) || res < -Math.pow(2,31) ? 0 : flag;
};