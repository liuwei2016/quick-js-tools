const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise{
    constructor(executor){
        executor(this.resolve.bind(this), this.reject.bind(this));
    }
    status=PENDING;
    value=undefined;
    reason=undefined;
    resolve(value){
        if(this.status === PENDING){
            this.status = FULFILLED;
            this.value = value;
            return this
            // this.resolve(value);
        }
    }
    reject(reason){
        if(this.status === PENDING){
            this.status = REJECTED;
            this.reason = reason;
            return this
            // this.reject(reason);
        }
    }
    then(onFulfilled, onRejected){
        if(this.status === FULFILLED){
            onFulfilled(this.value);
        }
        if(this.status === REJECTED){
            onRejected(this.reason);
        }
    }
}

const p = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
        resolve(1);
    // }, 1000);
});
p.then(value => {
    console.log(value);
})