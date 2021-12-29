// myApply

Function.prototype.myApply= function(ctx, args=[]){
    // return this.bind(ctx, ...args)();
    return this.bind(ctx)(...args);
}

Function.prototype.myCall= function(ctx, ...args){
    return this.bind(ctx)(...args);
}

let curry = function (callback, num) {
    let arr = [];
    debugger
    return function _function(...args) {
        arr.push(...args)
        if (arr.length >= num) {
            return callback.apply(null, arr.slice(0, num))
        }

        // what should return here?
    }
}

// a function that we can pass in as a callback
let sum = function (...args) {
    debugger
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }

    return sum;
}

console.log(curry(sum, 4)(1)(2)(3)(5))
console.log(curry(sum,3)(1, 2, 3, 4));