## js如何将多级菜单平级数据转化为树状数据？
```js
/**
 * js如何将多级菜单平级数据转化为树状数据？
 * 平级数组
 * 树状对象
 */

const arr = [
  { id: 1, name: '张三', age: 18, parentID: 0 },
  { id: 2, name: '李四', age: 18, parentID: 0 },
  { id: 3, name: '王五', age: 18, parentID: 0 },
  { id: 4, name: '张三丰', age: 18, parentID: 1 },
  { id: 5, name: '李思夜', age: 18, parentID: 2 },
  { id: 6, name: '李思思', age: 18, parentID: 5 },
  { id: 7, name: '张三爷', age: 18, parentID: 4 },
  { id: 8, name: '张大爷', age: 18, parentID: 7 },
  { id: 9, name: '去你大爷', age: 18, parentID: 8 },
]
/** todo 目标数据
 [
    {
        "id": 1,
        "name": "张三",
        "age": 18,
        "parentID": 0,
        "children": [
            {
                "id": 4,
                "name": "张三丰",
                "age": 18,
                "parentID": 1,
                "children": [
                    {
                        "id": 7,
                        "name": "张三爷",
                        "age": 18,
                        "parentID": 4,
                        "children": [
                            {
                                "id": 8,
                                "name": "张大爷",
                                "age": 18,
                                "parentID": 7,
                                "children": [
                                    {
                                        "id": 9,
                                        "name": "去你大爷",
                                        "age": 18,
                                        "parentID": 8,
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "李四",
        "age": 18,
        "parentID": 0,
        "children": [
            {
                "id": 5,
                "name": "李思夜",
                "age": 18,
                "parentID": 2,
                "children": [
                    {
                        "id": 6,
                        "name": "李思思",
                        "age": 18,
                        "parentID": 5,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "王五",
        "age": 18,
        "parentID": 0,
        "children": []
    }
]
 */

function getList(arr) {
  let newArr = []
  addField(arr) // 给所有的分类添加上一个children字段
  const lv1 = getLv1(arr) // 1. 先将一级菜单获取到，放到一个数组里边
  newArr = addSon(lv1)
  function addSon(lv1) {
    arr.forEach((item) => {
      if (item.parentID !== 0) {
        lv1.forEach((lv1Item) => {
          if (item.parentID === lv1Item.id) {
            lv1Item.children.push(item)
            if (item.children) {
              //如果该item 还存在children节点  把当前的item项当做父节点进行递归
              // console.log(item, "子节点中仍然存在children节点")
              const newarr = []
              newarr.push(item)
              return addSon(newarr)
            }
          }
        })
      }
    })
    return lv1
  }

  return newArr
}

// 获得一级菜单 并且给每一个item附上children
function getLv1(arr) {
  const lv1 = []
  arr.forEach((item) => {
    if (item.parentID === 0) {
      lv1.push(item)
    }
  })
  return lv1
}
// 添加children字段
function addField(arr) {
  arr.forEach((item) => {
    item.children = []
  })
}
console.log(getList(arr))

```