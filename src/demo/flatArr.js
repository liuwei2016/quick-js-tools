var arr = [1, [2, 3, [4, 5, [55]]], [6]];
// echo [1,2,3,4,5,6]
function flat(arr, depth) {
  return depth > 0
    ? //   console.log(arr)
      arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
          // debugger
          console.log("cur:", cur, " depth:", depth, flat(cur, depth - 1));
          let result = [...acc, ...flat(cur, depth - 1)];
          // console.log(result, cur)
          return result;
        } else {
          let bb = [...acc, cur];
          // console.log("bbb", bb);
          return bb;
        }
      }, [])
    : arr;
}

var a = flat(arr, 2);
// var b = flat([4, 5], 2);
console.log(a);
