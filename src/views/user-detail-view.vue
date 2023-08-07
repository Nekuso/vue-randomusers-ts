<script setup lang="ts">
import { useFetch } from '@/composables/use-fetch'
import { useRoute } from 'vue-router'

const route = useRoute()
const { fetchedUser } = useFetch(`${route.params.id}`)
</script>

<template>
  <div class="w-full h-500px p-5 rounded-xl border-xl bg-gray-400">
    <h3>This is a profile page</h3>
    <ul>
      <li>{{ fetchedUser.cell }}</li>
      <li>{{ fetchedUser.email }}</li>
      <li>{{ fetchedUser.dob }}</li>
      <li>{{ fetchedUser.gender }}</li>
      <li>{{ fetchedUser.id }}</li>
      <li>{{ fetchedUser.location }}</li>
      <li>{{ fetchedUser.login }}</li>
      <li>{{ fetchedUser.name }}</li>
      <li>{{ fetchedUser.nat }}</li>
      <li>{{ fetchedUser.phone }}</li>
      <li>{{ fetchedUser.picture }}</li>
      <li>{{ fetchedUser.registered }}</li>
    </ul>
  </div>
</template>
