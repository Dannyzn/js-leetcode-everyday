// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

// 返回一个表示每个字符串片段的长度的列表。

// 示例：

// 输入：S = "ababcbacadefegdehijhklij"
// 输出：[9,7,8] 解释： 划分结果为 "ababcbaca", "defegde", "hijhklij"

// 每个字母最多出现在一个片段中。 

// 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

// 思路分析:
// 同一个字母最多出现在一个片段中, 那么如何把同一个字母的都圈在同一个区间里呢？

// 在遍历过程中 相当于是要找每一个字母的边界 如果找到之前遍历过的所有的字母的最远边界

// 说明 这个边界就是分割点了

// 代码实现: 

var partitionLabels = function(s) {
    let hash = {};

    // 将数组元素转为 用map存取的方式
    // [s[i], i]
    // 根据相同的值 去 全部 更新相同字符出现的最后位置
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = i;
    }

    // {
    //     a: 8,
    //     b: 5,
    //     c: 7,
    //     d: 14,
    //     e: 15,
    //     f: 11,
    //     g: 13,
    //     h: 19,
    //     i: 22,
    //     j: 23,
    //     k: 20,
    //     l: 21
    // }


    let result = [];
    let left = 0, right = 0;

    for (let i = 0; i < s.length; i++) {
        //console.log('right', right, 'hash[s[i]]', hash[s[i]])
        // if tight === i.  8 === 8 找到了最远的距离的时候 我们就可以开始找到这个字符最大的距离 哈哈哈
        // 我们需要拿出 这个片段 和 重新更新 left 
        right = Math.max(right, hash[s[i]])
        if (right === i) {
            //console.log(right). // 8, 15, 23
            result.push(right - left + 1)
            left = i+1
        }
    }
    return result;
}
