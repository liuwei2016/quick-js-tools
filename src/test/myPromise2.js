const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function resolvePromise(promise2, chianThenValue, resolve, reject) {
    if (promise2 === chianThenValue) {
        return reject(
            new TypeError("Chaining cycle detected for promise #<Promise>")
        );
    }
    if (chianThenValue instanceof MyPromise) {
        // promise 对象
        // x.then(value => resolve(value), reason => reject(reason));
        chianThenValue.then(resolve, reject);
    } else {
        // 普通值
        resolve(chianThenValue);
    }
}

class MyPromise {
    constructor(executor) {
        try{
            executor(this.resolve, this.reject);
        }catch(e){
            this.reject(e);
        }
    }
    // promise 状态
    status = PENDING;
    value = undefined;
    reason = undefined;
    //成功的回调函数
    successCallbackStores = [];
    //失败的回调函数
    failCallbackStores = [];
    resolve=(value) => {
        if (this.status !== PENDING)  return ;
        this.status = FULFILLED;
        this.value = value;
        // this.resolve(value);
        while (this.successCallbackStores.length) {
            this.successCallbackStores.shift()();
        }
    }
    reject=(reason)=> {
        if (this.status !== PENDING)  return ;
        this.status = REJECTED;
        this.reason = reason;
        // this.reject(reason);
        while (this.failCallbackStores.length) {
            this.failCallbackStores.shift()();
        }
    }
    // static resolve(value) {
    //     if (value instanceof MyPromise) return value;
    //     return new MyPromise((resolve) => resolve(value));
    //   }
    static resolve(value) {
        if(value instanceof MyPromise){ return value;}
        console.log(value);
        return new MyPromise((resolve, reject) => {
            resolve(value);
        });
    }
    finally(callback) {
        return this.then(value=>{
            return MyPromise.resolve(callback()).then(()=>value);
        }, reason=>{
            return MyPromise.resolve(callback()).then(()=>{throw reason});
        })
    }
    catch(failCallback) {
        return this.then(null, failCallback);
    }
    then(successCallback, failCallback) {
        //参数可选
        successCallback = successCallback ? successCallback : (value) => value;
        failCallback = failCallback ? failCallback : (reason) => reason;

        let promise2 = new MyPromise((resolve, reject) => {
            // 同步代码 成功
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let chainThenValue = successCallback(this.value);
                        resolvePromise(promise2, chainThenValue, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            } else if (this.status === REJECTED) { //同步代码 失败
                setTimeout(() => {
                    try {
                        let chainThenValue = failCallback(this.reason);
                        resolvePromise(promise2, chainThenValue, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0);

            } //非同步
            else {
                // 成功回调
                this.successCallbackStores.push(() => {
                    setTimeout(() => {
                        try {
                            let chainThenValue = successCallback(this.value);
                            resolvePromise(promise2, chainThenValue, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
                // 失败回调
                this.failCallbackStores.push(() => {
                    setTimeout(() => {
                        try {
                            let chainThenValue = failCallback(this.reason);
                            resolvePromise(promise2, chainThenValue, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
            }
        });

        return promise2;
    }
}
debugger
// console.dir("MyPromise", MyPromise.resolve(22));
MyPromise.resolve(22).then(value => {
    console.log('MyPromise.resolve',value);
},reason => {
    console.log('MyPromise.reject',reason);
})
// const p = new MyPromise((resolve, reject) => {
//     //   setTimeout(() => {
//     resolve(13333);
//     //   }, 1000);
// });
// p.then((value) => {
//     console.log(value);
// }).then((value) => {
//     console.log(value);
// });

// const p2 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         // reject(new Error("error"));
//     }, 300);
// });
// p2.then(
//     (value) => {
//         console.log(value);
//     },
//     (reason) => {
//         console.log(reason);
//     }
// );
