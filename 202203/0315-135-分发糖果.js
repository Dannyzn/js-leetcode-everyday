// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

// 你需要按照以下要求，给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。


// 其实就是分开来考虑问题的

// 你不可能左右两边 都顾及到
//  ratings[i-1]  < ratings[i]  <  ratings[i+1]

// 但是你可以 先照顾一边 再去照顾另一边

var candy = function(ratings) {
    // 为啥我们需要去 初始化一个数组呢
    // 首先 每个孩子都至少会分到 一颗糖果
    let candyArr = new Array(ratings.length).fill(1);
    

    // 然后我们去找 左边比 i 小的部分
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1])  Math.max(candyArr[i], candyArr[i-1] + 1);
        // candyArr[i] = candyArr[i-1] + 1
    }

    // 然后我们去倒着处理右边的部分  为啥要倒着处理呢？
    // 可以拿到 倒数前两个 开刀
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) candyArr[i] = Math.max(candyArr[i], candyArr[i+1] + 1)
    }
}
