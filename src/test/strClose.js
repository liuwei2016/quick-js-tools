var code = "{[1+2]}";
var code2 = "{}]";

function codeTest(code) {
  var obj = {
    "{": "}",
    "[": "]",
  };
  var arr = code.split("");
  var stack = [];
  var result = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
    } else {
      if (arr[i] !== "}" || arr[i] !== "]") {
        continue;
      }
      var last = stack.pop(); // 取出栈顶元素
      console.log("出栈", last);
      if (obj[last] !== arr[i]) {
        // 如果不匹配 则返回false
        return false;
      }
    }
  }
  return result;
}
console.log(codeTest(code));
