<template>
  <main>
    <TestComVue :title="'123?????'" propF="success">
      Slot!!
      <template #test>testtt</template>
    </TestComVue>
    <TheWelcome></TheWelcome>
  </main>
</template>
<script setup>
import TestComVue from './TestCom.vue'
import TheWelcome from '@/components/TheWelcome.vue'

import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation,
})
</script>
