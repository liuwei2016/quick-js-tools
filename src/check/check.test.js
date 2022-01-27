const { isEmail  } = require("./index.js")
test("测试 isEmail('1101296840@qq.com')", () => {
    expect(isEmail('1101296840@qq.com')).toBe(true);
  });