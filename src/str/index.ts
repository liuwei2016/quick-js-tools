// 数字字符串千分位分隔
export function toThousands(num: number | string): string {
  let numStr = num.toString();
  let result = "";
  let count = 0;
  for (let i = numStr.length - 1; i >= 0; i--) {
    result = numStr[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }
  return result;
}

/*
 * 千位分隔符
 *  @param { number } num
 * input: "123456789" | 123456789
 * output: string  123,456,789
 */
export function formatNumber(num: number | string): string {
  var source = String(num).split("."); //按小数点分成2部分
  source[0] = source[0].replace(new RegExp("(\\d)(?=(\\d{3})+$)", "ig"), "$1,"); //只将整数部分进行都好分割
  return source.join("."); //再将小数部分合并进来
}

/*
 * 截取字符串并加身略号
 *  @param { number } num
 */
export function subText(str, length) {
  if (str.length === 0) {
    return "";
  }
  if (str.length > length) {
    return str.substr(0, length) + "...";
  } else {
    return str;
  }
}
