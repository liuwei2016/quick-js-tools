export type Options = {
  leading?: boolean;
  result?: Function;
};
export interface HandleFnFace {
  (value: any): void;
  cancel?: Function;
}
/**
 * fn: function
 *
 * delay: number for ms
 *
 * options: {leading: boolean 是否立即执行, result: 回调函数}
 *
 * return: Function
 * */
export function debounce(
  fn: Function,
  delay: number,
  option: Options = {}
): Function {
  var timer: any = null;
  if (!option) option = {};
  let leading = option.leading || false;
  let result = option.result || null;

  var handleFn: HandleFnFace = function (this: any, ...args): any {
    if (timer) clearTimeout(timer);
    // 获取this和argument
    var _this = this;
    var _arguments = args;

    if (leading) {
      // 通过一个变量来记录是否立即执行
      var isInvoke = false;
      if (!timer) {
        callFn(_this, _arguments);
        isInvoke = true;
      }
      // 定时器通过修改timer来修改instant
      timer = setTimeout(function () {
        timer = null;
        if (!isInvoke) {
          callFn(_this, _arguments);
        }
      }, delay);
    } else {
      timer = setTimeout(function () {
        // 在执行时，通过apply来使用_this和_arguments
        callFn(_this, _arguments);
      }, delay);
    }
  };

  function callFn(context, argument) {
    var res = fn.apply(context, argument);
    if (result) {
      result(res);
    }
  }

  // 取消处理
  handleFn.cancel = function () {
    if (timer) clearTimeout(timer);
  };

  return handleFn;
}
