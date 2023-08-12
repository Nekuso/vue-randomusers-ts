<script setup lang="ts">
import DarkModeButton from '@/components/dark-mode-button.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="content w-full pt-9 flex justify-between">
    <RouterLink to="/" class="flex items-center">
      <h1 class="text-4xl font-bold dark:text-slate-100 transition-colors duration-500">Nekuso</h1>
    </RouterLink>
    <DarkModeButton class="scale-75" />
  </nav>
</template>
