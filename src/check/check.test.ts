import { isEmail } from "./index";
const mail1 = "1101296840@qq.com";
test(`测试 isEmail(${mail1})`, () => {
  expect(isEmail(mail1)).toBe(true);
});

const mail2 = "1101296840";
test(`测试 isEmail(${mail2})`, () => {
  expect(isEmail(mail2)).toBe(false);
});

const mail3 = "1101296840@qq";
test(`测试 isEmail(${mail3})`, () => {
  expect(isEmail(mail3)).toBe(true);
});
