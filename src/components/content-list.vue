<script setup lang="ts">
import type { User } from '@/types/user'
import type { PropType } from 'vue'
import ContentListItem from './content-list-item.vue'
defineProps({
  paginatedUsers: {
    type: Array as PropType<User[]>,
    required: true
  }
})
</script>

<template>
  <div class="w-full flex flex-col gap-3 justify-center align-center">
    <div class="w-full min-h-[579px] max-h-[579px]">
      <div
        class="bg-white dark:bg-slate-900 relative overflow-x-auto shadow-md sm:rounded-lg h-full transition-colors duration-500"
      >
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 transition-colors duration-500 table-fixed justify-center align-center"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 transition-colors duration-500"
          >
            <tr>
              <th scope="col" class="px-6 py-3 w-[65%]">Name</th>
              <th scope="col" class="px-6 py-3">Location</th>
              <th scope="col" class="px-6 py-3">Gender</th>
              <!-- <th scope="col" class="px-6 py-3">Action</th> -->
            </tr>
          </thead>
          <tbody>
            <ContentListItem v-for="(user, index) in paginatedUsers" :key="index" :user="user" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<styles scoped>
</styles>
