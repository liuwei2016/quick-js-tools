(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  const isNumber = value => /^\d{1,}$/g.test(value);
  console.log(isNumber('123'));

})));
