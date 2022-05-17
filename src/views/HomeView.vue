<template>
  <main>
    <TestComVue :title="'123?????'" propF="success">Slot!!</TestComVue>
    <TheWelcome></TheWelcome>
  </main>
</template>
<script setup>
  import TestComVue from './TestCom.vue'
  import TheWelcome from '@/components/TheWelcome.vue'
</script>


