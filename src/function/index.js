const memoize = fn => {
    const cache = new Map();
    const cached = function(clear) {
      return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    return cached;
  };
  

  
  
  
// import memoize from "lodash-es/memoize"

// import pkg from 'lodash';
// const { memoize } = pkg;
// import { memoize } from "lodash";
function test(a,b) {
    console.log(a,b)
    return 3;
}
const memoizeTest = memoize(test)

memoizeTest({aa:1})
memoizeTest({aa:1,bb:2})

console.log(memoizeTest.toString())