const imageSrc = 'https://www.themealdb.com/images/ingredients/Lime.png';
function loadImage(src, callback) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = '专用图？';
    image.style = 'width: 200px;height: 200px';
    image.onload = () => callback(null, image);
    image.onerror = () => callback(new Error('加载失败'));
    document.body.append(image);
}


// const loadImagePromise = function(src){
//     return new Promise(function(resolve, reject){
//         loadImage(src, function (err, image) {
//             if(err){
//                 reject(err);
//                 return;
//             }
//             resolve(image);
//         });
//     });
// };
// loadImagePromise(imageSrc).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// });

// const loadImagePromise = function(src){
//    return new Promise(function(resolve, reject){
//        loadImage(src, function (err, image) {
//            if(err){
//                reject(err);
//                return;
//            }
//            resolve(image);
//        });
//    })
// }


  loadImage(imageSrc, function(err, content){
    if(err){
      console.log(err);
      return;
    }
    console.log(content);
  });

function promisify(original){
    function fn(...args){
        return new Promise((resolve, reject) => {
            args.push((err, ...values) => {
                if(err){
                    return reject(err);
                }
                resolve(values);
            });
            original.apply(this, args);
            // Reflect.apply(original, this, args);
        });
    }
    return fn;
}

// const loadImagePromise = promisify(loadImage);
// async function load(){
//     try{
//         const res = await loadImagePromise(imageSrc);
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// load();

const imageSrc1 = 'https://www.themealdb.com/images/ingredients/Lime.png';

function load2(src, callback){
    if(src &&callback){
        callback(null, src,'成功');
    }
}

load2(imageSrc1, function(err, val,text){
    if(err){
      console.log(err);
      return;
    }
    console.log(val,text);
  });
  function promisify(original){
    function fn(...args){
        return new Promise((resolve, reject) => {
            args.push((err, ...values) => {
                if(err){
                    return reject(err);
                }
                resolve(values);
            });
            // original.apply(this, args);
            Reflect.apply(original, this, args);
        });
    }
    return fn;
}

 const loadPormise = promisify(load2);
 loadPormise.then((a,b)=>{
     console.log(a, b,啦啦啦);
 })

