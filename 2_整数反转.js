/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
    如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
    假设环境不允许存储 64 位整数（有符号或无符号）。
    示例 1：
    输入：x = 123
    输出：321
    提示：
    -231 <= x <= 231 - 1
 */
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if(x===0){
        return 0;
    }else if(x > 0){
        var res = parseInt(x.toString().split("").reverse().join(""));
    }else{
        var res = parseInt(x.toString().split("").reverse().join(""));
        res = -res;
    }
    // 判断越界
    return res > (Math.pow(2,31)-1) || res < -Math.pow(2,31) ? 0 : res