/**
 * 此代码段返回一个n从左侧删除元素的新数组。
 * */ 
export const drop = (arr, n = 1) => arr.slice(n);

// console.log(drop([1, 2, 3])); // [2,3]
// console.log(drop([1, 2, 3], 2)); // [3]
// console.log(drop([1, 2, 3], 42)); // []