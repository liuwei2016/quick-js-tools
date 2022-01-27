import { isEmail } from "./index";
test("测试 isEmail('1101296840@qq.com')", () => {
  expect(isEmail("1101296840@qq.com")).toBe(true);
});

const mail2 = "1101296840";
test(`测试 isEmail(${mail2})`, () => {
  expect(isEmail(mail2)).toBe(false);
});
