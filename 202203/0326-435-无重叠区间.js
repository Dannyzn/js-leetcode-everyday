// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

// 注意: 可以认为区间的终点总是大于它的起点。 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。


// 示例 1:

// 输入: [ [1,2], [2,3], [3,4], [1,3] ]
// 输出: 1
// 解释: 移除 [1,3] 后，剩下的区间没有重叠。
// 示例 2:

// 输入: [ [1,2], [1,2], [1,2] ]
// 输出: 2
// 解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
// 示例 3:

// 输入: [ [1,2], [2,3] ]
// 输出: 0
// 解释: 你不需要移除任何区间，因为它们已经是无重叠的了。


// 思路分析:

// 首先 我们都知道是 排序, 但是究竟是按照右边界排序 还是按照左边界排序 可能我真的不会了

// 我们可以认识这是一个难点


var eraseOverlapIntervals = function(intervals) {
    // 右排序
    intervals.sort((a, b) => {
        return a[1] - b[1]
    })
    // // [[1,2], [2,3], [1,3], [3,4]]

    let count = 1;
    let end = intervals[0][1]  // [1,2] --> 2

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        // if (end > interval[1]) {
        // 2 >= 2
        if (interval[0] >= end) {   
            count += 1;
            end = interval[1]
        }
    }

    return intervals.length - count;
}


// 左排序

var eraseOverlapIntervals = function(intervals) {
    // 按照 左排序升序排列
    intervals.sort((a, b) => {
        return  a[0] - b[0]
    })
    // // [[1,2], [1,3], [2,3], [3,4]]
    let count = 1;
    let end = intervals[intervals.length-1][0];

    for (let i = intervals.length - 2; i >= 0; i--) {
        if (intervals[i][1] <= end) {
            count++;
            end = intervals[i][0]
        }
    }

    // count 是记录最大的非重复区间的个数
    return intervals.length - count;
    // 抄完了 哈哈
}