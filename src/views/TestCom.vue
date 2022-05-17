<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    },
  },
})
console.log(props.title)

// const emit = defineEmits(['enlargeText'])
const emit = defineEmits({
  // // 没有校验
  // click: null,

  // 校验 submit 事件
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  },
})

function submitForm(email, password) {
  emit('submit', { email, password })
}

emit('enlarge-text')
</script>
<template>
  <p>{{ props.title }}</p>
  <slot></slot>
  <p @click="submitForm">哈哈</p>
</template>
<style lang="scss" scoped></style>
