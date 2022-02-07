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
