function all(promises) {
    // your code here
    return new Promise((res, rej)=>{
        let resolve = new Array(promises.length);
        if (promises.length=== 0) {
            res(resolve);
        };
        let pending = promises.length
        promises.forEach((promise, i)=> {
            promise.then(
                function(result) {
                resolve[i] = result;
                pending -= 1;
                if (pending === 0) {
                    res(resolve);
                }
            }, 
                function(err){
                    rej(err);
            })
        });
    });
}

// test case
function soon(val) {
    return new Promise(function (success) {
        setTimeout(function () { success(val); },
            Math.random() * 500);
    });
}
all([soon(1), soon(2), soon(3)]).then(function (array) {
    console.log("This should be [1, 2, 3]:", array);
});

all([1, 2, 3, Promise.resolve(4)]).then((value) => {
    console.log(value)
})