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

const aa = function(a: any, bb:any,callback:Function) {
    callback(null, a,bb);
}
const cc = promisify(aa)
cc('123','222').then(res => { console.log(res) });