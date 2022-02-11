type O = any;
export const is = (type: any, val: any) =>
  ![, null].includes(val) && val.constructor === type;
// is(Array, [1]); // true
// // is(ArrayBuffer, new ArrayBuffer()); // true
// is(Map, new Map()); // true
// is(RegExp, /./g); // true
// is(Set, new Set()); // true
// is(WeakMap, new WeakMap()); // true
// is(WeakSet, new WeakSet()); // true
// is(String, ''); // true
// is(String, new String('')); // true
// is(Number, 1); // true
// is(Number, new Number(1)); // true
// is(Boolean, true); // true
// is(Boolean, new Boolean(true)); // true

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

/**验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
@param { string } value
*/
export const isMPStrict = (value) =>
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(
    value
  );

/**验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
@param { string } value
*/
export const isMPRelaxed = (value) =>
  /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);

/**验证座机电话(国内),如: 0341-86091234
@param { string } value
*/
export const isLandlineTelephone = (value) =>
  /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);

/**验证小数字符串
@param { string } value
*/
export const isDecimal = (value) => /^\d+\.\d+$/g.test(value);

/**验证数字字符串 不含小数点
@param { string } value
*/
export const isNumberStr = (value: string) => /^\d{1,}$/g.test(value);

/**验证数字和字母组成
@param { string } value
*/
export const isNumAndStr = (value) => /^[A-Za-z0-9]+$/g.test(value);

/* 验证英文字母
 * @param { string } value
 */
export const isEnglish = (value) => /^[a-zA-Z]+$/g.test(value);

/* 验证小写英文字母
 * @param { string } value
 */
export const isLowercase = (value) => /^[a-z]+$/g.test(value);

/*
 * 验证网址(支持端口和"?+参数"和"#+参数)
 * @param { string } value
 */
export const isRightWebsite = (value: string) =>
  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(
    value
  );

/*
 * 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
 * @param { string } value
 */
export const isWeChatNum = (value: string) =>
  /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);

/*
 * 是否为16进制颜色
 */
export const isColor16 = (o: O) =>
  /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(o);

/*
 * 验证邮政编码(中国)
 *@param { string } value
 */
export const isPostcode = (value: string) =>
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(
    value
  );

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
export const isDateType = (o: O) => {
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
/**
 * 获取类型
 * @param o  any
 * @returns string
 */
export const getType = (o: O): string => {
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
};
/**
 * 获取浏览器类型
 * @returns string
 */
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

export function isIOS() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}

export function isAndroid() {
  if (/(Android|Adr)/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}
/**
 * 是否为移动设备
 * 主要针对：iPhone|iPad|iPod|iOS|Android|Adr 进行判断
 * */
export function isMobile(): boolean {
  if (/(iPhone|iPad|iPod|iOS|Android|Adr)/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
}
/**
 * 是否为微信环境
 * */
export function isWexin() {
  const u = navigator.userAgent.toLowerCase();
  return u.indexOf("microMessenger") > -1;
}
/**
 * 是否为PC环境
 * */
export function isPC() {
  //是否为PC端
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
