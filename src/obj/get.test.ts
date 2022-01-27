const get = require("./get.ts");

test("测试 obj get", () => {
  expect(get({ a: 1 }, "a")).toBe(1);
});
