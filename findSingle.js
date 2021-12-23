// Given an array of integers, all integers appear twice except one integer, 
// could you quickly target it ?

// What is time & space cost of your approach ? Could you do better ?


function findSingle(arr) {
    let set= {};
    arr.forEach(num=>{
        if (set[num] === undefined){
            set[num] = 1;
        } else {
            set[num] +=1;
        }
    })
    for (let i= arr.sort()[0]; i<= arr.sort()[arr.length-1]; i++){
        if (set[i]=== 1){
            return i
        }
    }
}



// const arr = [10, 2, 2, 1, 0, 0, 10]
const arr= [1, 1, 2]
console.log(findSingle(arr) )// 1