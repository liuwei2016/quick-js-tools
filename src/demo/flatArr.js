var arr = [1, [2, 3, [4, 5, [55]]], [6]];
// echo [1,2,3,4,5,6]
function flat(arr, depth = 1) {
  if (depth > 0) {
    return arr.reduce((acc, cur) => {
      if (Array.isArray(cur)) {
        console.log("cur:", cur, " depth:", depth, flat(cur, depth - 1));
        let result = [...acc, ...flat(cur, depth - 1)];
        return result;
      } else {
        let bb = [...acc, cur];
        return bb;
      }
    }, []);
  } else {
    return arr;
  }
}
// var a = flat(arr, 2);
// console.log(a);
function flatArrDeepByStack(arr) {
  var stack = [...arr];
  var result = [];
  while (stack.length !== 0) {
    const cur = stack.shift();
    console.log(cur);
    if (Array.isArray(cur)) {
      stack.push(...cur);
    } else {
      result.push(cur);
    }
  }
  return result;
}

console.log(flatArrDeepByStack([1, [2, 3, [4, 5]]]));

function flatArr(arr, depth = 1) {}
