
/**
 * 此方法查找两个数组之间的差异, a相比b的差异。
 * */
 export const difference = function(a:Array<any>, b:Array<any>):Array<any>{
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  };
//   console.log(difference([1, 2, 3], [1, 2, 4])); // [3]