/**
   此代码段可用于获取数组中某个值的所有索引，如果该值未包含在其中，则返回一个空数组。
 * 
 * */
export const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
// indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
// indexOfAll([1, 2, 3], 4); // []

// const indexOfAll2 = (arr,val)=> arr.reduce((acc,el,i)=>(el===val ? [...acc,i]: acc),[])

