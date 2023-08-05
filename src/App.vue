<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/nav.vue'
</script>

<template>
  <div class="w-full h-screen flex justify-center">
    <div class="max-w-3xl flex flex-col gap-5 w-full">
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
