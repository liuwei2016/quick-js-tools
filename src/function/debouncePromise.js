function debounce(fn, delay, leading) {
    var timer = null;
    leading = leading || false;
    var handleFn = function () {
      return new Promise((resovle, reject) => {
        if (timer) clearTimeout(timer);
        // 获取this和argument
        var _this = this;
        var _arguments = arguments;
  
        if (leading) {
          // 通过一个变量来记录是否立即执行
          var isInvoke = false;
          if (!timer) {
            resovle(fn.apply(_this, _arguments));
            isInvoke = true;
          }
          // 定时器通过修改timer来修改instant
          timer = setTimeout(function () {
            timer = null;
            if (!isInvoke) {
              resovle(fn.apply(_this, _arguments)); 
            }
          }, delay);
        } else {
          timer = setTimeout(function () {
            // 在执行时，通过apply来使用_this和_arguments
            resovle(fn.apply(_this, _arguments));
          }, delay);
        }
      })
    }
  
    // 取消处理
    handleFn.cancel = function () {
      if (timer) clearTimeout(timer);
    }
  
    return handleFn;
  }