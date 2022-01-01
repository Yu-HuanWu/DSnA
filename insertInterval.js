function numberRange(start, end) {
    return new Array(end - start).fill().map((d, i) => i + start);
}

var insert = function (intervals, newInterval) {
    let resultArr= [];
    intervals.forEach(interval=>{
        if (!numberRange(interval[0], interval[1]).includes(newInterval[0]) && !numberRange(interval[0], interval[1]).includes(newInterval[1])) {
            resultArr.push(interval)
        }
    })
    return resultArr
};

let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
let newInterval = [4, 8]
console.log(insert(intervals, newInterval)) //[[1,2],[3,10],[12,16]]