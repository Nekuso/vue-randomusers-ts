<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useFetchUsers, Users } from '@/composables/use-fetch-users'
import HeaderActions from '@/components/header-actions.vue'


onMounted(() => {
  // useFetchUsers()
})
</script>

<template>
  <main class="content w-full flex justify-between flex-col ">
    <HeaderActions />
  </main>
</template>

<style scoped></style>
