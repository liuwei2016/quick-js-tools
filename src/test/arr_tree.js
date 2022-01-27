let arr = [
  { id: 6, name: "部门6", pid: 1 },
  { id: 0, name: "部门-1", pid: -1 },
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

// let arr = [
//   { id: 1, name: "部门1", pid: 0 },
//   { id: 2, name: "部门2", pid: 1 },
//   { id: 3, name: "部门3", pid: 2 }
// ]
/**
 * [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
]
 * */

//
const treeNodeArr = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      { id: 6, name: "部门6", pid: 1 },
      { id: 2, name: "部门2", pid: 1 },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [{ id: 5, name: "部门5", pid: 4 }],
          },
        ],
      },
    ],
  },
];
// 树形结构
const tree = (arr, pid) => {
  let result = []; //结果
  let temp = []; // 临时数组
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pid === pid) {
      //首先找到根节点 然后找到根节点的子节点
      console.log(arr[i].pid);
      temp = tree(arr, arr[i].id);
      if (temp.length > 0) {
        arr[i].children = temp;
      }
      result.push(arr[i]);
    }
  }
  return result;
};

const treeNode = (arr, pid)=>{
    let result = []; //结果
    let temp = []; // 临时数组
     for( let i = 0 ; i < arr.length ; i++ ){
         if(arr[i].pid === pid){
             //表示找到匹配的父节点
             temp = treeNode(arr,arr[i].id); //去找子节点
             arr[i].children = temp;
             console.log(temp);
            result.push(arr[i]);
         }
     }
     return result;
}

/**
 * 递归查找，获取children
 */
 const getChildren = (data, result, pid) => {
    for (const item of data) {
      if (item.pid === pid) { //当前pid === pid 时，说明找到了父节点
        const newItem = {...item, children: []};
        result.push(newItem);
        getChildren(data, newItem.children, item.id); //针对这个父节点去找子节点
      }
    }
  }
  
  /**
  * 转换方法
  */
  const arrayToTree = (data, pid) => {
    const result = [];
    getChildren(data, result, pid)
    return result;
  }
 

// 非递归挂载
/*
* 从上面的代码我们分析，有两次循环，该实现的时间复杂度为O(2n)，需要一个Map把数据存储起来，空间复杂度O(n)
*/
function arrayToTreeByMap(items,rootPid) {
    const result = [];   // 存放结果集
    const itemMap = {};  // 
      
    // 先转成map存储
    for (const item of items) {
      itemMap[item.id] = {...item, children: []}
    }
    
    for (const item of items) { 
      const id = item.id;
      const pid = item.pid;
      const treeItem =  itemMap[id];
      if (pid === rootPid) { // 如果当前节点的pid === rootPid，说明是要提取该节点下的数据
        result.push(treeItem);
      } else {
        if (!itemMap[pid]) { //数据不存在，先在map创建
          itemMap[pid] = {
            children: [],
          }
        }
        // 为 该pid 下 挂载对应的treeItem
        itemMap[pid].children.push(treeItem)
      }
    }
    console.log(itemMap);
    return result;
  }

/**
 * 主要思路也是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储。不同点在遍历的时候即做Map存储,有找对应关系。性能会更好。
 * */   
  function arrayToTreeByMap2(items,rootPid) {
    const result = [];   // 存放结果集
    const itemMap = {};  // 
    for (const item of items) {
      const id = item.id;
      const pid = item.pid;
  
      if (!itemMap[id]) {
        itemMap[id] = {
          children: [],
        }
      }
//   调整 当前map下面的children
      itemMap[id] = {
        ...item,
        children: itemMap[id]['children']
      }
  
      const treeItem =  itemMap[id];
  
      if (pid === rootPid) {
        result.push(treeItem);
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: [],
          }
        }
        // 调整当下item pid的chlidren
        itemMap[pid].children.push(treeItem)
      }

      console.log(itemMap);
  
    }
    return result;
  }
  
  const arrayToTreeByMap3 = (items,rootPid) => {
      let map = {};
      let result = [];
      for(const item of items){
          let id = item.id;
          let pid = item.pid;
          if(!map[id]){
             map[id]= {...item,children:[]};
          }
          map[id] = {...item,children:map[id]['children']};
          const treeItem = map[id];
            if(pid === rootPid){
                result.push(treeItem);
            }else{
                if(!map[pid]){
                    map[pid] = {children:[]};
                }
                map[pid].children.push(treeItem);
            }
      }
      return result;
    }
  

// const aa = treeNode(arr, 0);
// const bb = arrayToTree(arr, 0);
// const cc = arrayToTreeByMap(arr, 0);
const dd = arrayToTreeByMap2(arr, 0);

// console.log(JSON.stringify(aa));
// console.log(JSON.stringify(bb));
// console.log(JSON.stringify(cc));
console.log(JSON.stringify(dd));

// 树结构 如何转为数组
function treeToArray(data,   parentId) {
    const result = [];
    let temp;
    for (const item of data) {
        if (item.pid === parentId) {
            temp = {...item, children: []};
            result.push(temp);
            temp.children = treeToArray(data,   item.id);
        }
    }
    return result;
}
const result = treeToArray(dd, 1)
console.log(result);