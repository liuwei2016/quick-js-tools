/**
此代码段可用于获取数组中某个值的所有索引，如果该值未包含在其中，则返回一个空数组。
 * 
 * */
export const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
// indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
// indexOfAll([1, 2, 3], 4); // []

// const indexOfAll2 = (arr,val)=> arr.reduce((acc,el,i)=>(el===val ? [...acc,i]: acc),[])

export const is = (type, val) =>
  ![, null].includes(val) && val.constructor === type;
// is(Array, [1]); // true
// // is(ArrayBuffer, new ArrayBuffer()); // true
// is(Map, new Map()); // true
// is(RegExp, /./g); // true
// is(Set, new Set()); // true
// is(WeakMap, new WeakMap()); // true
// is(WeakSet, new WeakSet()); // true
// is(String, ''); // true
// is(String, new String('')); // true
// is(Number, 1); // true
// is(Number, new Number(1)); // true
// is(Boolean, true); // true
// is(Boolean, new Boolean(true)); // true
