<template>
  <div>
    <p>{{ props.title }}</p>
    <slot></slot>

    <p @click="submitForm">哈哈</p>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div></div>
    <slot name="test"></slot>
  </div>
</template>
<script setup>
// s
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
  modelValue: Number,
  modelModifiers: { default: () => ({}) },
})

// defineEmits(['update:modelValue'])

console.log(props.modelModifiers) // { capitalize: true }
console.log(props.title)

// const emit = defineEmits(['enlargeText'])
const emit = defineEmits({
  // 没有校验
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
  'update:modelValue': null,
})
console.log(props.modelModifiers, 'modelModifiers') // { capitalize: true }

function submitForm(email, password) {
  emit('submit', { email, password })
}

emit('enlarge-text')
</script>
// 模板

<style lang="scss" scoped></style>
