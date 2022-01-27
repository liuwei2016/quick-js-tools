type Options = {
  defaultValue?: any;
};
type K = string | (string | number)[];
function get(o: any, k: K, options: Options = {}): any {
  let target = o;
  if (k === null || k === undefined) {
    return options.defaultValue || null;
  }
  if ((typeof k !== "string" && !Array.isArray(k)) || k.length === 0) {
    return options.defaultValue || undefined;
  }

  let keys: (string | number)[] = [];
  if (typeof k === "string") {
    keys = k.replace(/\]/g, "").split(/\.|\[/) as [];
  } else {
    keys = k;
  }
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    let key: any = keys[i];
    if (target.constructor && target.constructor === Array && /\d+/.test(key)) {
      key = Number(keys[i]);
    }
    if (target[key] === null || target[key] === undefined) {
      //   console.log(target);
      target = options.defaultValue || null;
      break;
    }
    target = target[key];
  }
  return target;
}
export default get;
module.exports = get;

// const obj = { a: { b: { c: 0, d: [1, 2, 3] } } };
// const options = { defaultValue: [123] };
// console.log(get(obj, "a.b.c"));
// const cc = get(obj, "a.c", options);
// const dd = get(obj, "a.b.d[1]", options);
// const ee = get(obj, ["a", "b", "d", "bb"], options);
// console.log(cc);
// console.log(dd);
// console.log(ee);
// // console.log(get(obj, "a"));
