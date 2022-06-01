<template>
  <div class="demo-color-block">
    <span class="demonstration">With default value</span>
    <el-color-picker v-model="color1" />
  </div>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
  </div>

  <!--使用方法 v-resize:200.delay="handleResize"  -->
  <div class="TestCom" ref="container" v-resize:1="handleResize">
    <div v-for="item in menuList" :key="item" class="item">{{ item.name }}</div>
  </div>
  {{ popMenuList }}

  <div @click="getFolderChilren">文件夹</div>
</template>
<script>
import { ref } from 'vue'
const color1 = ref(null)
const value1 = ref(null)
export default {
  name: 'TestCom',
}
</script>
<script setup>
// import { toggleDark, isDark } from '@/composables'

const container = ref('container')

let menuList = ref([
  { name: 'xxxx', hidden: false },
  { name: 'xxxxxx', hidden: false },
  { name: 'xxxxxxxx', hidden: false },
  { name: 'xxxxx', hidden: false },
  { name: 'xxxxxxxxxx', hidden: false },
  { name: 'xxxxxxxxxxxx', hidden: false },
  { name: 'xxxx', hidden: false },
  { name: 'xxxxxx', hidden: false },
  { name: 'xxxxxxxx', hidden: false },
  { name: 'xxxxx', hidden: false },
])

const popMenuList = ref([])

let getotalChildWidth = () => {
  let totalWith = 0
  // console.log(container.value.getElementsByClassName('item'))
  // console.log(Array.from(container.value.getElementsByClassName('item')))
  Array.from(container.value.getElementsByClassName('item')).map((eachDiv) => {
    totalWith += eachDiv.offsetWidth // offsetWidth:"width+padding+border";clientWidth:"width+padding"
  })
  return totalWith
}

let getContainerWidth = () => {
  return container.value.offsetWidth
}
const handleResize = () => {
  console.log(getContainerWidth(), '-', getotalChildWidth())
  // getotalChildWidth()
  if (getContainerWidth() - getotalChildWidth() < -10) {
    popMenuList.value.push(menuList.value.pop())
  } else if (getContainerWidth() - getotalChildWidth() > 100) {
    //popMenuList  menuList
    menuList.value.push(popMenuList.value.pop())
  }
}

let getFolderChilren = () => {
  let fso = new ActiveXObject('Scripting.FileSystemObject')
  let fldr = fso.GetFolder('/Users/laixueming/BN/vue/LRAP')
  console.log(fldr)
}
</script>
<style lang="scss" scoped>
.TestCom {
  height: 100px;
  width: auto;
  // background-color: aqua;
  display: flex;
  align-items: center;
  .item {
    height: 80px;
    width: 80px;
    // background-color: antiquewhite;
    width: auto;
    max-width: 120px;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
  }
}
</style>
