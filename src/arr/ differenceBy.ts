
/**
 * 此方法获取一个数字作为输入并返回其数字数组
 * */
//  type AnyFunction = (...args: any[]) => void;  //类型别名
 interface AnyFunction  { //类型接口
  (...args: any[]): void;
}
export const differenceBy = (a:Array<any>, b:Array<any>, fn:AnyFunction) => {
    const s = new Set(b.map(fn));
    return a.filter(x => !s.has(fn(x)));
  };
//   differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
//   differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]


// 与接口类型不一样，类型别名可以用于一些其他类型，比如原始类型、联合类型和元组：

// primitive
type Name = string;

// object
// type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];


// 接口和类型别名都能够被扩展，但语法有所不同。此外，接口和类型别名不是互斥的。接口可以扩展类型别名，而反过来是不行的。

interface PartialPointX { x: number; }
interface Point extends PartialPointX { 
  y: number; 
}
