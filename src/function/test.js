const imageSrc1 = 'https://www.themealdb.com/images/ingredients/Lime.png';

function load2(src, text, callback){
    if(src &&callback){
        callback(null, src,text,'成功');
    }else{
        callback('error', src,text ,'失败');
    }
}
// load2(imageSrc1, function(err, val,text){
//     if(err){
//       console.log(err);
//       return;
//     }
//     console.log(val,text);
//   });
  function promisify(original){
    function fn(...args){
        console.log(args);
        return new Promise((resolve, reject) => {
            args.push((err, ...values) => {
             console.log(values);
                if(err){
                    return reject(err);
                }
                resolve(values);
            });
            console.log(args);
            // console.log(this,original);
            // original(...args);
            original.apply(this, args);
            // Reflect.apply(original, this, args);
        });
    }
    return fn;
}

 const loadPormise = promisify(load2);
 loadPormise('','test').then((a)=>{
     console.log(a,'啦啦啦');
 })

 