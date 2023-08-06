<script setup lang="ts">
import type { User } from '@/types/user'
import type { PropType } from 'vue'
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
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 transition-colors duration-500"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 transition-colors duration-500"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Location</th>
              <th scope="col" class="px-6 py-3">Gender</th>
              <!-- <th scope="col" class="px-6 py-3">Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in paginatedUsers"
              :key="user.email"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-500"
            >
              <th
                scope="row"
                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white transition-colors duration-500"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  :src="user.picture.thumbnail"
                  alt="Jese image"
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">
                    {{ user.name.first }} {{ user.name.last }}
                  </div>
                  <div class="font-normal text-gray-500">{{ user.email }}</div>
                </div>
              </th>
              <td class="px-6 py-4">{{ user.location.country }}</td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  {{ user.gender[0].toUpperCase() + user.gender.slice(1) }}
                </div>
              </td>
              <!-- <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >view user</a
              >
            </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<styles scoped>
</styles>
