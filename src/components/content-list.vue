<script setup lang="ts">
import { Users } from '@/composables/use-fetch-users'
</script>

<template>
  <div class="w-full">
    <ul>
      <li v-for="item in Users" key="item.email">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<styles scoped>
</styles>
