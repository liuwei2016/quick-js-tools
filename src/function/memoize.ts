export const memoize = (fn: Function) => {
  const cache = {};
  return function (this: any, ...args) {
    const key = args.join("-");
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
};
