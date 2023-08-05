<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useFetchUsers, Users } from '@/composables/use-fetch-users'
import ContentHeader from '@/components/content-header.vue'
import ContentList from '@/components/content-list.vue'

onMounted(() => {
  // useFetchUsers()
})
</script>

<template>
  <main class="content w-full flex justify-between flex-col flex-nowrap">
    <ContentHeader />
    <ContentList />
  </main>
</template>

<style scoped></style>
