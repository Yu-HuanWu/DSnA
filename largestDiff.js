// Given an array of numbers, pick any two numbers a and b, we could get the 
// difference by Math.abs(a - b).

// Can you write a function to get the largest difference ?

function largestDiff(arr){
    if (arr.length< 2){
        return 0
    };
    let largest= 0

    for(let i=0; i< arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if (Math.abs(arr[i]- arr[j]) > largest){
                largest = Math.abs(arr[i]-arr[j])
            }
        }
    }
    return largest
}


console.log(largestDiff([-1, 2, 3, 10, 9]))
// 11,  obviously Math.abs(-1 - 10) is the largest

largestDiff([])
// 0

largestDiff([1])
// 0