<script setup lang="ts">
import { useFetch } from '@/composables/use-fetch'
import { useRoute } from 'vue-router'

const route = useRoute()
const { fetchedUser } = useFetch(`${route.params.id}`)
</script>

<template>
  <div
    class="w-full h-[500px] p-5 rounded-xl border-xl bg-white shadow-lg flex flex-col gap-[70px] dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500"
  >
    <!-- Linear Gradient Background -->
    <div class="relative w-full h-[200px] bg-blue-400 rounded-xl">
      <div
        class="absolute w-full h-full bg-gradient-to-b from-blue-400 to-blue-500 rounded-xl"
      ></div>
      <img
        class="absolute w-40 h-40 rounded-full -bottom-1/3 left-3 border-4 border-white dark:border-slate-800 transition-colors duration-500"
        :src="fetchedUser.picture.large"
        alt="user-profile"
      />
    </div>
    <!-- User Info -->
    <div class="w-full h-[200px] mx-4 flex flex-col gap-9">
      <div class="w-full flex flex-col">
        <h1
          class="flex place-items-center gap-1 text-2xl font-bold text-black dark:text-white transition-colors duration-500 leading-3"
        >
          {{ fetchedUser.name.first }} {{ fetchedUser.name.last }}
          <i class="bx bxs-badge-check text-teal-400 text-[1.8rem]"></i>
        </h1>
        <h4
          class="text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"
        >
          @{{ fetchedUser.login.username }}
        </h4>
      </div>
      <div class="w-full flex flex-col gap-1">
        <h4
          class="text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"
        >
          <i class="bx bxs-buildings"></i>
          {{ fetchedUser.location.city }}, {{ fetchedUser.location.country }}
        </h4>
        <h4
          class="text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"
        >
          <i class="bx bx-street-view"></i>
          {{ fetchedUser.location.street.name }}
          {{ fetchedUser.location.street.number }}
        </h4>
      </div>
    </div>
  </div>
</template>
