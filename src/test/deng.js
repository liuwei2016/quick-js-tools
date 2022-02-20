// var aa =  [1,2,3,4,5,9] ;
// var bb=   [2,3,4,5,6,7,8];

// var cc  = aa.concat(bb);
// // cc.sort()
// var dd = []
// var ee  = []  //栈结构
// cc.forEach((v) => {

//     if(dd.length >0 && v >= dd[0] ){
//         dd.push(v)
//     }else{
//         ee.push(v)
//     }

// });

// //进行数组的合并
// function merge(a,b){
//     var c =  []
//     while(a.length &&  b.length){
//         if(  a[0] < b[0]){
//            c.push(a.shift())
//         }else if( a[0] > b[0]){
//             c.push(b.shift())
//         }

//     }
//     if(a.length){
//         c = c.concat(a)
//     }

//     if(b.length){
//         c= c.concat(b)
//     }

//     return c
// }
// merge(aa,bb)

//  数组
// [1,2,3,4,5,9]
// [2,3,4,5,6,7,8]

// [1,2,2,3,3,4,4,5,5,6,7,9]  [8]

//前提是两个有序数组，有序数组（如此）可直接用此方法
// function sortArray(arr1, arr2)  {
//     var resultArray= []
//     var index1 = 0
//     var index2 = 0
//     while (index1 < arr1.length && index2 < arr2.length) {
//         if(arr1[index1] < arr2[index2]){
//             resultArray.push(arr1[index1])
//             index1 += 1
//         } else {
//             resultArray.push(arr2[index2])
//             index2 += 1
//         }
//     }
//     while (index1 < arr1.length) { //index1 没读完
//         resultArray.push(arr1[index1])
//         index1 += 1
//     }
//     while (index2 < arr2.length) { //index2 没读完
//         resultArray.push(arr2[index2])
//         index2 += 1
//     }
//     return resultArray
// }
// var bb = sortArray([1,2,3,4,8], [2,3,4,5,6,7])
// console.log(bb)

function mergeSort(a, b) {
  var c = [];
  while (a.length && b.length) {
    if (a[0] <= b[0]) {
      c.push(a.shift());
    } else if (a[0] > b[0]) {
      c.push(b.shift());
    }
  }
  console.log(a, b, c);
  if (a.length) {
    c = c.concat(a);
  }
  if (b.length) {
    c = c.concat(b);
  }
  return c;
}
var d = merge([1, 2, 3, 4, 8], [2, 3, 4, 5, 6, 7]);
console.log(d);

// 合并两个有序数组
function sortTwoArr(a, b) {}
