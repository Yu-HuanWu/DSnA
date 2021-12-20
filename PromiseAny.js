function any(promises){
    let result = new Promise((res, rej)=>{
        let isFulfilled = false;
        const errors= []
        promises.forEach((promise, i)=>{
            promise.then((value)=>{
                if (!isFulfilled) {
                    res(value);
                    isFulfilled= true;
                }
            }, (error)=>{
                errors[i]= error;

                if (errors.length === promises.length) {
                    rej(new AggregateError('No Promise in Promise.any was resolved', errors))
                }
            })
        })
    })
    return result
}