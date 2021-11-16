/**
 * 使用递归。

利用Object.keys(obj)联合Array.prototype.reduce()，以每片叶子节点转换为扁平的路径节点。
如果键的值是一个对象，则函数使用调用适当的自身prefix以创建路径Object.assign()。
否则，它将适当的前缀键值对添加到累加器对象。
prefix除非您希望每个键都有一个前缀，否则应始终省略第二个参数。
 * @returns 
 */

const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
  
var bb =flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
console.log(bb)