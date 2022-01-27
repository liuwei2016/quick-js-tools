function deepClone(obj, h= newWeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (h.has(obj)) {
    return h.get(obj);
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  h.set(obj, result);
  for (let key in obj) {
    result[key] = deepClone(obj[key], h);
  }
  return result;
}

function deepCopy(obj, h = new WeakMap()){
    if(obj === null || typeof obj !== "object"){ //基本类型直接返回
        return obj;
    }
    if(h.has(obj)){
        return h.get(obj);
    }
    let result;
    if(obj instanceof Array){
        result = [];
    }else {
        result = {};
    }
    h.set(obj, result);
    for( let key in obj){
        result[key] = deepCopy(obj[key], h);
    }
    return result;
}

function trampoline(fn) {
    while(fn && fn instanceof Function){
        fn = fn()
    }
  return fn;
}

var aa = {
    test: undefined,
    test2: null,
    name: 'aa',
    bb:[{
        name: 'bb',
        cc: {
            name: 'cc'
        }
    }]
}

var aa1 = deepCopy(aa);