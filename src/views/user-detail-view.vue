<script setup lang="ts">
import { useFetch } from '@/composables/use-fetch'
import { useRoute } from 'vue-router'

const route = useRoute()
const { fetchedUser } = useFetch(`${route.params.id}`)
</script>

<template>
  <div class="w-full h-500px p-5 rounded-xl border-xl bg-gray-400">
    <h3>This is a profile page {{ fetchedUser }}</h3>
  </div>
</template>
