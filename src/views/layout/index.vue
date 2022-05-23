<template>
  <div class="admin-layout">
    <button @click="storeLayout.updateLayoutType('layout2')">
      updateLayoutType
    </button>
    <component :is="currentLayout"></component>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'main-layout',
}
</script>
<script setup>
import { defineAsyncComponent, watch } from 'vue'
import { useStoreLayout } from './store-layout.js'

const storeLayout = useStoreLayout()

const currentLayout = ref(null)

const layoutDefault = defineAsyncComponent(() => import('./default/index.vue'))
const layout2 = defineAsyncComponent(() => import('./layout2/index.vue'))
currentLayout.value = layoutDefault

watch(
  () => storeLayout.layoutType, // 监听布局变化
  (newLayoutType) => {
    console.log(newLayoutType, 'newLayoutType')
    switch (newLayoutType) {
      case 'default':
        currentLayout.value = layoutDefault
        break
      case 'layout2':
        currentLayout.value = layout2
        break
    }
  }
)
</script>
<style lang="scss" scoped></style>
