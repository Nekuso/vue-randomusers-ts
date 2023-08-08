<script setup lang="ts">
import ContentHeader from '@/components/content-header.vue'
import ContentList from '@/components/content-list.vue'
import ContentPagination from '@/components/content-pagination.vue'
import { useFetchUsers } from '@/composables/use-fetch-users'
import { onMounted } from 'vue'
import { handlePagination } from '@/composables/use-pagination'

const { currentPage, pages, paginatedUsers, nextPage, prevPage, setCurrentPage, displayPages } =
  handlePagination()

// onMount only once)
</script>

<template>
  <main class="content w-full flex justify-between flex-col gap-3">
    <ContentHeader />
    <ContentList :paginatedUsers="paginatedUsers" />
    <ContentPagination
      :currentPage="currentPage"
      :pages="pages"
      :nextPage="nextPage"
      :prevPage="prevPage"
      :setCurrentPage="setCurrentPage"
      :displayPages="displayPages"
    />
  </main>
</template>

<style scoped></style>
