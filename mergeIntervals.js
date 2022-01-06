// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the non - overlapping
//  intervals that cover all the intervals in the input.



//     Example 1:

// Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].
//     Example 2:

// Input: intervals = [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.


//     Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

var merge = function (intervals) {
    let result=[]
    intervals= intervals.sort((a,b)=> a[0]-b[0])
    for (let i = 0; i < intervals.length-1; i++) {
        // console.log(intervals)
        // console.log(i)
        // console.log(intervals.length)
        if (intervals[i][1] >= intervals[i+1][0]){
            if (intervals[i][1]<= intervals[i+1][1]){
                result.push([intervals[i][0], intervals[i+1][1]]);
                let temp= result;
                temp= temp.concat(intervals.slice(i+2));
                intervals= temp;
                result= []
                i= -1
            } else {
                result.push([intervals[i][0], intervals[i][1]]);
                let temp = result;
                temp = temp.concat(intervals.slice(i + 2));
                intervals = temp;
                result = []
                i = -1
            }
        } else {
            result.push(intervals[i])
        }
    }
    return intervals
};

console.log(merge([[1, 4], [4, 5]]))
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])) //[[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [0, 2], [3, 5]]))
console.log(merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]])) //[[1,3],[4,7]]
console.log(merge([[0,1], [1,100]]))
console.log(merge([[0,5], [9,10]]))