class MyPromise {
    constructor(executor) {
        // your code here
        this.state = "pending";
        this.value= undefined;
        this.handlers= [];

        try {
            executor(MyPromise.resolve, MyPromise.reject);
        } catch (err) {
            MyPromise.reject(err)
        }
    }

    then(onFulfilled, onRejected) {
        // your code here
        return new MyPromise((res, rej)=> {
            this.addHandlers({
                onFulfilled: function(value){
                    if (!onFulfilled) {
                        return res(value);
                    }
                    try {
                        return res(onFulfilled(value))
                    } catch(err) {
                        return rej(err);
                    }
                },
                onRejected: function(value){
                    if (!onRejected) {
                        return rej(value);
                    }
                    try {
                        return res(onRejected(value))
                    } catch(err) {
                        return rej(err);
                    }
                }
            });
        });
    }

    addHandlers(handlers) {
        this.handlers.push(handlers);
        this.executeHandlers();
    }

    executeHandlers() {
        if (this.state === "pending") {
            return null;
        }

        this.handlers.forEach((handler)=>{
            if (this.state === "fulfilled") {
                return handler.onFulfilled(this.value);
            }
            return handler.onRejected(this.value);
        });
        this.handlers= []
    }

    catch(onRejected) {
        // your code here
        return this.then(null, onRejected);
    }

    static resolve(value) {
        // your code here
        console.log(this)
        this.updateResult(value, "fulfilled");
    }

    static reject(value) {
        // your code here
        this.updateResult(value, 'rejected');
    }

    updateResult(value, state) {
        console.log('updateResult')
        setTimeout(() => {
            if (this.state !== 'pending') {
                return;
            }

            if (value instanceof MyPromise) {
                return value.then(MyPromise.resolve, MyPromise.reject);
            }

            this.value = value;
            this.state = state;
            this.executeHandlers();
        }, 0);
    }
}


// const STATE = {
//     PENDING: 'PENDING',
//     FULFILLED: 'FULFILLED',
//     REJECTED: 'REJECTED',
// }
// class MyPromise {
//     constructor(callback) {
//         // Initial state of Promise is empty
//         this.state = STATE.PENDING;
//         this.value = undefined;
//         this.handlers = [];
//         // Invoke callback by passing the _resolve and the _reject function of our class
//         try {
//             callback(this._resolve, this._reject);
//         } catch (err) {
//             this._reject(err)
//         }
//     }

//     _resolve = (value) => {
//         this.updateResult(value, STATE.FULFILLED);
//     }

//     _reject = (error) => {
//         this.updateResult(error, STATE.REJECTED);
//     }

//     updateResult(value, state) {
//         // This is to make the processing async
//         setTimeout(() => {
//             /*
//               Process the promise if it is still in pending state. 
//               An already rejected or resolved promise is not processed
//             */
//             if (this.state !== STATE.PENDING) {
//                 return;
//             }

//             // check is value is also a promise
//             if (value instanceof MyPromise) {
//                 return value.then(this._resolve, this._reject);
//             }

//             this.value = value;
//             this.state = state;

//             // execute handlers if already attached
//             this.executeHandlers();
//         }, 0);
//     }

//     then(onSuccess, onFail) {
//         return new MyPromise((res, rej) => {
//             this.addHandlers({
//                 onSuccess: function (value) {
//                     // if no onSuccess provided, resolve the value for the next promise chain
//                     if (!onSuccess) {
//                         return res(value);
//                     }
//                     try {
//                         return res(onSuccess(value))
//                     } catch (err) {
//                         return rej(err);
//                     }
//                 },
//                 onFail: function (value) {
//                     // if no onFail provided, reject the value for the next promise chain
//                     if (!onFail) {
//                         return rej(value);
//                     }
//                     try {
//                         return res(onFail(value))
//                     } catch (err) {
//                         return rej(err);
//                     }
//                 }
//             });
//         });
//     }

//     addHandlers(handlers) {
//         this.handlers.push(handlers);
//         this.executeHandlers();
//     }

//     executeHandlers() {
//         // Don't execute handlers if promise is not yet fulfilled or rejected
//         if (this.state === STATE.PENDING) {
//             return null;
//         }

//         // We have multiple handlers because add them for .finally block too
//         this.handlers.forEach((handler) => {
//             if (this.state === STATE.FULFILLED) {
//                 return handler.onSuccess(this.value);
//             }
//             return handler.onFail(this.value);
//         });
//         // After processing all handlers, we reset it to empty.
//         this.handlers = [];
//     }

//     catch(onFail) {
//         return this.then(null, onFail);
//     }

//     // finally(callback) {
//     // }
// }

let myFirstPromise = new MyPromise((res, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function () {
        res("Success!")  // Yay! Everything went well!
    }, 100)
})

myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage)
});