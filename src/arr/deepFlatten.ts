/**
* 深度扁平化
* 此方法递归地展平数组。
*/
export const deepFlatten = function(arr:Array<any>):Array<any> {
    return  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));
 }
// console.log(deepFlatten([1, [2], [[3], 4], 5])); // [1,2,3,4,5])
 

// 此代码段使用递归将数组展平到指定的深度。

 const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

// flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
// flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]