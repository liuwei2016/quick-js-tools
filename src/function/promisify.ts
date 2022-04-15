/**
 * 此方法让一个回调函数变成promisify
 * */
export function promisify(original:Function){
    const fn = (...args:any[]) =>{
        return new Promise((resolve, reject) => {
            args.push((err, ...values) => {
                if(err){
                    return reject(err);
                }
                resolve(values);
            });
            // original.apply(this, args);
            const self = this as any;
            Reflect.apply(original,self, args);
        });
    }
    return fn;
}

