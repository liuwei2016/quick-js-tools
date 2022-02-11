function myBind(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  };
}
function myBind(fn, context) {
  return function(...args) {
    return fn.apply(context, args);
  };
}
