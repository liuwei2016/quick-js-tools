let arr = [
  { id: 6, name: "部门6", pid: 1 },
  { id: 0, name: "部门-1", pid: -1 },
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

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
const treeNode = [
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

const aa = tree(arr, 0);

console.log(JSON.stringify(aa));
