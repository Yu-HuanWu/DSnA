function numberRange(start, end) {
    return new Array(end+1 - start).fill().map((d, i) => i + start);
}

var insert = function (intervals, newInterval) {
    let resultArr= [];
    let newInt = [];
    intervals.forEach(interval => {
            if (numberRange(interval[0], interval[1]).includes(newInterval[0])) {
                newInt.push(interval[0])
            } else {
                newInt.push(newInterval[0])
            }
    })

    intervals.forEach(interval => {
        if (interval[0]<= newInterval[1]){
            if (numberRange(interval[0], interval[1]).includes(newInterval[1])) {
                newInt.push(interval[1])
            } else {
                newInt.push(newInterval[1])
            }
        }
    })

    newInt = newInt.sort((a, b) => a - b);
    newInt = [newInt[0], newInt[newInt.length - 1]]

    for (let i = 0; i < intervals.length; i++) {
        if (!numberRange(intervals[i][0], intervals[i][1]).includes(newInterval[0]) && !numberRange(intervals[i][0], intervals[i][1]).includes(newInterval[1])) {
            if ((!numberRange(newInt[0], newInt[1]).includes(intervals[i][0]) || !numberRange(newInt[0], newInt[1]).includes(intervals[i][1]))){
                resultArr.push(intervals[i])
            }
        };
    }
    resultArr.push(newInt);
    return resultArr.sort((a, b) => a[0] - b[0])
};

let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
let newInterval = [4, 8]

intervals = [[1, 3], [6, 9]]
newInterval = [2, 5]

intervals = [[2, 5], [6, 7], [8, 9]];
newInterval= [0, 1];
// console.log(numberRange(1, 3))
console.log(insert(intervals, newInterval)) //[[1,2],[3,10],[12,16]]
