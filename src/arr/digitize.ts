
/**
 * 此方法获取一个数字作为输入并返回其数字数组
 * */
 export const digitize = (n:number) => [...`${n}`].map(i => parseInt(i));
//  // digitize(431); // [4, 3, 1]
 
const digitize = (n: number): number[] => {    // 此方法获取一个数字作为输入并返回其数字数组
    const arr: number[] = [];
    const str: string = n.toString();
    for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]));
    }
    return arr;
}
 