
function Factory(name) {
  this.name = name;
}
Factory.prototype.say = function () {
  console.log("hello：  " + this.name);
};

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     say() {
//         console.log("im " + this.name);
//     }
// }

console.log([1, 2].shift());
console.log([1, 2].splice(3, 1));
console.log(typeof Date);
/**
 * 
 * 警告: 通过现代浏览器的操作属性的便利性，可以改变一个对象的 [[Prototype]] 属性, 
 * 这种行为在每一个JavaScript引擎和浏览器中都是一个非常慢且影响性能的操作，
 * 使用这种方式来改变和继承属性是对性能影响非常严重的，
 * 并且性能消耗的时间也不是简单的花费在 obj.__proto__ = ... 语句上, 
 * 它还会影响到所有继承来自该 [[Prototype]] 的对象，
 * 如果你关心性能，你就不应该在一个对象中修改它的 [[Prototype]]。
 * 相反, 创建一个新的且可以继承 [[Prototype]] 的对象，推荐使用 Object.create()
 * 
 */
function new_object() {
  let obj = new Object();
  // 获得构造函数
  console.log(arguments.length);
  let Con = [].shift.call(arguments);
  obj.__proto__ = Con.prototype;
  // 绑定this 执行构造函数
  console.log(arguments.length);
  let result = Con.apply(obj, arguments);
  // 确保返回对象
  return typeof result === "object" ? result : obj;
}

/**
 * 
 * */ 
function create() {
    let Con = [].shift.call(arguments);
    let obj = Object.create(Con.prototype);
    let result = Con.apply(obj, arguments);
    return typeof result === "object" ? result : obj;
}


const man1 = new_object(Factory, "lalala");
const man2 = create(Factory, "bbbb");
// const benci = new_object(Car, "benci");
// console.log(benci.say());
console.log(new_object(Factory, "lalala"), man1.say(),man2.say());
console.log(new_object(Array, 1, 2, 3));
