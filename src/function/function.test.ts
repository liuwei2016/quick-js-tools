import { memoize } from "./memoize";
import { promisify } from "./promisify";
function fn1(aa) {
  return {
    name: aa,
  };
}
const fn = memoize(fn1);
const cc = fn("123");
test(`memoize`, () => {
  expect(fn("123")).toBe(cc);
});

const aa = function (a: any, bb: any, callback: Function) {
  callback(a, bb);
};
const dd = promisify(aa);

test(`promisify`, () => {
  dd("123", "222").then((res) => {
    console.log(res);
    expect(res).not.toBe(undefined);
  });
});
