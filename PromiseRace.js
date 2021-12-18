// The Promise.race() method returns a promise that fulfills or rejects 
// as soon as one of the promises in an iterable fulfills or rejects, 
// with the value or reason from that promise.source: MDN

function race(promises) {
    // your code here
    const result = new Promise((res, rej)=>{
        promises.forEach((promise)=>{
            promise.then(res).catch(rej)
        })
    })
    return result
}