/**
 * 此方法让一个回调函数变成promisify
 * */
 export const promisify = (fn: Function) => (...args: any[]) => {
    return new Promise((resolve, reject) => {
        fn(...args, (err: any, ...data: any) => {
            // console.log(args,err, data);
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
const self:any = this;
function promisify2(original:Function){
    const fn = (...args:any[]) =>{
        return new Promise((resolve, reject) => {
            args.push((err, ...values) => {
                if(err){
                    return reject(err);
                }
                resolve(values);
            });
            // original.apply(this, args);
            // const self = this!;
            Reflect.apply(original,self, args);
        });
    }
    return fn;
}

const aa = function(a: any, bb:any,callback:Function) {
    callback(null, a,bb);
}
const cc =  promisify2(aa)
cc('123','222').then(res => { console.log(res) });