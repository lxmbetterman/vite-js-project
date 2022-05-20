/* 
    布局相关的全局数据状态管理
*/
import { defineStore } from 'pinia'

export const useStoreLayout = defineStore('storeLayout', {
  state: () => {
    return {
      layoutType: 'default', // 布局类型
    }
  },
  actions: {
    updateLayoutType(typeName) {
      // 更新布局名称
      this.layoutType = typeName
    },
  },
})
