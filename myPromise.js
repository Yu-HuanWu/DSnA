class MyPromise1 {
    constructor(executor) {
        // your code here
        this.state = 'pending';
        this.handlers = [];
        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch (err) {
            this._reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        // your code here
        return new MyPromise1((res, rej) => {
            this.handlers.push({
                fulfilled: (value) => {
                    if (typeof onFulfilled !== 'function') {
                        res(value);
                        return
                    } try {
                        res(onFulfilled(value));
                    } catch (err) {
                        rej(err);
                    }
                },
                rejected: (error) => {
                    if (typeof onRejected !== 'function') {
                        rej(error);
                        return;
                    } try {
                        res(onRejected(error));
                    } catch (err) {
                        rej(err);
                    }
                }
            });
            this.exectuteHandlers();
        })
    }

    exectuteHandlers() {
        if (this.state === 'pending') return;
        this.handlers.forEach((handler) => {
            queueMicrotask(() => {
                handler[this.state](this.result);
            })
        })
        this.handlers = [];
    }

    _resolve(value) {
        if (this.state !== 'pending') return;
        if (value instanceof MyPromise1) {
            value.then(this._resolve.bind(this), this._reject.bind(this));
            return;
        }

        this.state = 'fulfilled';
        this.result = value;
        this.exectuteHandlers();
    }

    _reject(error) {
        if (this.state !== 'pending') return;
        this.state = 'rejected';
        this.result = error;
        this.exectuteHandlers();
    }

    catch(onRejected) {
        // your code here
        return this.then(undefined, onRejected);
    }

    static resolve(value) {
        // your code here
        return new MyPromise1((res) => {
            res(value);
        })
    }

    static reject(value) {
        // your code here
        return new MyPromise1((res, rej) => {
            rej(value)
        })
    }
}

class MyPromise2 {
    constructor(executor) {
        // your code here
        this.state = "pending";
        this.value = undefined;
        this.handlers = [];

        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (err) {
            this.reject(err)
        }
    }

    then(onFulfilled, onRejected) {
        // your code here
        return new MyPromise2((res, rej) => {
            this.addHandlers({
                onFulfilled: function (value) {
                    if (!onFulfilled) {
                        return res(value);
                    }
                    try {
                        return res(onFulfilled(value))
                    } catch (err) {
                        return rej(err);
                    }
                },
                onRejected: function (value) {
                    if (!onRejected) {
                        return rej(value);
                    }
                    try {
                        return res(onRejected(value))
                    } catch (err) {
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

        this.handlers.forEach((handler) => {
            if (this.state === "fulfilled") {
                return handler.onFulfilled(this.value);
            }
            return handler.onRejected(this.value);
        });
        this.handlers = []
    }

    catch(onRejected) {
        // your code here
        return this.then(null, onRejected);
    }

    resolve(value) {
        // your code here
        this.updateResult(value, "fulfilled");
    }

    reject(value) {
        // your code here
        this.updateResult(value, 'rejected');
    }

    updateResult(value, state) {
        setTimeout(() => {
            if (this.state !== 'pending') {
                return;
            }

            if (value instanceof MyPromise2) {
                return value.then(this.resolve, this.reject);
            }

            this.value = value;
            this.state = state;
            this.executeHandlers();
        }, 0);
    }

    static resolve(val) {
        return new MyPromise2((res)=>{
            return res(val)
        })
    }

    static reject(val){
        return new MyPrommise((res, rej)=>{
            return rej(val)
        })
    }
}

// testcase 1
let myFirstPromise = new MyPromise1((res, reject) => {
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

// testcase 2
const mp = MyPromise2.resolve(1)
mp.then((data) => {
    console.log(data)
})