/**
 * 验证email(邮箱)
@param { string } value
*/
export const isEmail = (value) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
    value
  );

  /**
   * 验证身份证号, 支持1/2代(15位/18位数字)
@param { string } value
*/
export const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);


/**验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
@param { string } value
*/
export const isIDCardNew = value => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);


/**
 * 验证中文姓名
@param { string } value
*/
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);


/**验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
@param { string } value
*/
export const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);

// 
/**验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可
@param { string } value
*/
export const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);

/**验证座机电话(国内),如: 0341-86091234
@param { string } value
*/
export const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);


/**验证中文/汉字
@param { string } value
*/
export const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);

/**验证小数
@param { string } value
*/
export const isDecimal = value => /^\d+\.\d+$/g.test(value);


/**验证数字
@param { string } value
*/
export const isNumber = value => /^\d{1,}$/g.test(value);


/**验证数字和字母组成
@param { string } value
*/
export const isNumAndStr = value => /^[A-Za-z0-9]+$/g.test(value);


/**验证英文字母 
@param { string } value
*/
export const isEnglish = value => /^[a-zA-Z]+$/g.test(value);


/**
 * 验证大写英文字母
@param { string } value
*/
export const isCapital = value => /^[A-Z]+$/g.test(value);

/**验证小写英文字母
@param { string } value
*/
export const isLowercase = value => /^[a-z]+$/g.test(value);

/**
 * 验证中文姓名
@param { string } value
*/
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);


/**
 * 验证网址(支持端口和"?+参数"和"#+参数)
@param { string } value
*/
export const isRightWebsite = value => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);

/**
 * 验证必须带端口号的网址(或ip)
@param { string } value
*/
export const isHttpAndPort = value => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);

/**
 * 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
@param { string } value
*/
export const isWeChatNum = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);


/**
 * 验证16进制颜色
@param { string } value
*/
export const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);


/**
 * 验证邮政编码(中国)
@param { string } value
*/
export const isPostcode = value => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);


/********num***/ 

/**
 * 金钱格式化，三位加逗号
 *  @param { number } num
    */
 export const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * 截取字符串并加身略号
 *  @param { number } num
    */
 export function subText(str, length) {
    if (str.length === 0) {
        return '';
    }
    if (str.length > length) {
        return str.substr(0, length) + "...";
    } else {
        return str;
    }
}



module.exports = {
    isEmail,
}