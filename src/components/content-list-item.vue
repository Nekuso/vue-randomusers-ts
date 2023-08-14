<script setup lang="ts">
import type { User } from '@/types/user'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { Routes } from '@/constants/route-names'
import router from '@/router'

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
    inheritAttrs: true
  }
})

const gender = computed(() => {
  return props.user.gender[0].toUpperCase() + props.user.gender.slice(1)
})

function viewUser() {
  router.push({ name: Routes.USER, params: { id: props.user.login.username } })
}
</script>

<template>
  <tr
    @click="viewUser()"
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-500 cursor-pointer"
  >
    <th
      scope="row"
      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white transition-colors duration-500"
    >
      <img class="w-10 h-10 rounded-full" :src="user.picture.thumbnail" alt="Jese image" />
      <div class="pl-3">
        <div class="text-base font-semibold">{{ user.name.first }} {{ user.name.last }}</div>
        <div class="font-normal text-gray-500">{{ user.email }}</div>
      </div>
    </th>
    <td class="px-6 py-4">{{ user.location.country }}</td>
    <td class="px-6 py-4">
      <div class="flex items-center">
        {{ gender }}
      </div>
    </td>
  </tr>
</template>
