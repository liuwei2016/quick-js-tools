type O = any;
/**
 * 验证是否是邮箱
 *  */
export const isEmail = (value: any): boolean =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
    value
  );

/**
   * 验证身份证号, 支持1/2代(15位/18位数字)
@param { string } value
*/
export const isIDCard = (value: any): boolean =>
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(
    value
  );

/**验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
@param { string } value
*/
export const isIDCardNew = (value: any): boolean =>
  /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);

/**
 * 验证中文姓名
@param { string } value
*/
export const isChineseName = (value: any): boolean =>
  /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);

/**
 * 是否为null
 * @param o  any
 * @returns boolean
 */
export const isNull = (value: any): boolean => {
  //是否为null
  return Object.prototype.toString.call(value).slice(8, -1) === "Null";
};

/**
 * 是否为undefined
 * @param o  any
 * @returns boolean
 */
export const isUndefined = (o: any): boolean => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
};

export const isString = (o: O) => {
  //是否字符串
  return Object.prototype.toString.call(o).slice(8, -1) === "String";
};

export const isNumber = (o: O) => {
  //是否数字
  return Object.prototype.toString.call(o).slice(8, -1) === "Number";
};

export const isObj = (o: O) => {
  //是否对象
  return Object.prototype.toString.call(o).slice(8, -1) === "Object";
};

export const isArray = (o: O) => {
  //是否数组
  return Object.prototype.toString.call(o).slice(8, -1) === "Array";
};

export const isDate = (o: O) => {
  //是否时间
  return Object.prototype.toString.call(o).slice(8, -1) === "Date";
};

export const isBoolean = (o: O) => {
  //是否boolean
  return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
};

export const isFunction = (o: O) => {
  //是否函数
  return Object.prototype.toString.call(o).slice(8, -1) === "Function";
};

export const getType = (o: O): string => {
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
};

export function getBrowserType() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  var isIE =
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1 &&
    !isOpera; //判断是否IE浏览器
  var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  var isSafari =
    userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
  var isChrome =
    userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) return "IE7";
    else if (fIEVersion == 8) return "IE8";
    else if (fIEVersion == 9) return "IE9";
    else if (fIEVersion == 10) return "IE10";
    else if (fIEVersion == 11) return "IE11";
    else return "IE7以下"; //IE版本过低
  }

  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isEdge) return "Edge";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
}
