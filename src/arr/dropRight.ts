/**
 * 此代码段返回一个n从右侧删除元素的新数组。
 * */ 
 const dropRight = (arr:any[], n = 1) => arr.slice(0, -n);

//  dropRight([1, 2, 3]); // [1,2]
//  dropRight([1, 2, 3], 2); // [1]
//  dropRight([1, 2, 3], 42); // []