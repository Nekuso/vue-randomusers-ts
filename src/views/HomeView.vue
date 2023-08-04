<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useFetchUsers, Users } from '@/composables/use-fetch-users'

const inputPrompt = ref<number>(10)

function submitPrompt() {
  Users.value = []
  useFetchUsers(inputPrompt.value)
}

// watch(inputPrompt, () => {
//   useFetchUsers(inputPrompt.value)
// }, {deep: true})

onMounted(() => {
  useFetchUsers()
})
</script>

<template>
  <div class="content w-full flex justify-between bg-indigo-400">something</div>
</template>
