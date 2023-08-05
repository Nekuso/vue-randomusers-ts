<script setup lang="ts">
import ContentHeader from '@/components/content-header.vue'
import ContentList from '@/components/content-list.vue'
import { useFetchUsers } from '@/composables/use-fetch-users'
import { onMounted } from 'vue'

onMounted(() => {
  useFetchUsers(6)
})
</script>


<template>
  <main class="content w-full flex justify-between flex-col gap-3">
    <ContentHeader />
    <ContentList />
  </main>
</template>

<style scoped></style>
