<script setup lang="ts">
import DarkModeButton from '@/components/dark-mode-button.vue'
</script>

<template>
  <div class="content w-full pt-9 flex justify-between">
    <a href="/users" class="flex items-center">
      <h1 class="text-4xl font-bold dark:text-slate-100 transition-colors duration-500">
        Nekuso
      </h1>
    </a>

    <DarkModeButton class="scale-75" />
  </div>
</template>
