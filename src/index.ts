import chunk from "./chunk";
import hex2rgb from "./hex2rgb";
import isPlainObject from "./obj/is-plain-objectject";
import isColor from "./is-color";
import rgb2hex from "./rgb2hex";
import stairStepAccessTable from "./stair-step-access-table";
// import arr from "./arr"
// const difference:Function = arr.difference;
// const differenceBy:Function = arr.difference;
// const digitize:Function = arr.difference;

import * as check from "./check/index";

const quickJsTools = {
  chunk,
  hex2rgb,
  isColor,
  isPlainObject,
  rgb2hex,
  stairStepAccessTable,
  ...check
};

 
export default quickJsTools;
