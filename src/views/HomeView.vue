<template>
  <HelloWorld msg="You did it!" />
  <main>
    <TheWelcome></TheWelcome>
  </main>
</template>
<script setup>
import HelloWorld from '@/components/HelloWorld.vue'

import TheWelcome from '@/components/TheWelcome.vue'

import { provide, ref, readonly } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location: readonly(location),
  // location,
  updateLocation,
})
</script>
