<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/nav.vue'
</script>

<template>
  <div class="w-screen h-screen flex justify-center">
    <div class="w-4/5 flex flex-col gap-5" >
      <Nav></Nav>
      <RouterView />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
* {
  font-family: 'Sora', sans-serif;
}
</style>
