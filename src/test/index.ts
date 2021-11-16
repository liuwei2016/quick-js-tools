/**
* 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。 换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。目前主要有四种的方式来实现类型保护：
 * 
 * */
// interface Admin {
//     name: string;
//     privileges: string[];
//   }
  
//   interface Employee {
//     name: string;
//     startDate: Date;
//   }
  
//   type UnknownEmployee = Employee | Admin;
  
//   function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log("Name: " + emp.name);
//     if ("privileges" in emp) {
//       console.log("Privileges: " + emp.privileges);
//     }
//     if ("startDate" in emp) {
//       console.log("Start Date: " + emp.startDate);
//     }
//   }
  
//   printEmployeeInformation({name:'liuwei',startDate:new Date})


// function padLeft(value: string, padding: string | number) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
//   }
   
//   padLeft("1",4)


// 六、交叉类型
// 在 TypeScript 中交叉类型是将多个类型合并为一个类型。通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
// type PartialPointX = { x: number; };
// type Point = PartialPointX & { y: number; };
// let point: Point = {
//   x: 1,
//   y: 2
// }
 

interface D { d: boolean; }
interface E { e: string; }
interface F { f: number; }

interface A { x: D; }
interface B { x: E; }
interface C { x: F; }

type ABC = A & B & C;

let abc: ABC = {
  x: {
    d: true,
    e: 'semlinker',
    f: 666
  }
};

console.log('abc:', abc);


// 任意属性
// 有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用 索引签名 的形式来满足上述要求。

interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
  }
  
  const p1 = { name: "semlinker" };
  const p2 = { name: "lolo", age: 5 };
  const p3 = { name: "kakuqo", sex: 1 }
   

  //接口和类型别名都可以用来描述对象的形状或函数签名：

//   interface Point {
//     x: number;
//     y: number;
//   }
  
//   interface SetPoint {
//     (x: number, y: number): void;
//   }

//   type Point = {
//     x: number;
//     y: number;
//   };
  
//   type SetPoint = (x: number, y: number) => void;