const myCount= (()=>{
    let counter= 0

    let func = ()=>{
        counter+=1
        return counter;
    }

    func.reset= ()=>{
        counter= 0
        return "Counter has been reset"
    }

    return func
})()

console.log(myCount());
console.log(myCount());
console.log(myCount.reset());
console.log(myCount());