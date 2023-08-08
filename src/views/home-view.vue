<script setup lang="ts">
import ContentHeader from '@/components/content-header.vue'
import ContentList from '@/components/content-list.vue'
import ContentPagination from '@/components/content-pagination.vue'
import { handlePagination } from '@/composables/use-pagination'

const { currentPage, pages, paginatedUsers, nextPage, prevPage, setCurrentPage, displayPages } =
  handlePagination()
</script>

<template>
  <main class="content content w-full flex justify-between flex-col gap-3">
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

<style scoped>
.content {
  animation: fade-in 0.5s ease-in-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
