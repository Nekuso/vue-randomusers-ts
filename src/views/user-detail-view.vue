<script setup lang="ts">
import { useFetch } from '@/composables/use-fetch'
import { useRoute } from 'vue-router'

const route = useRoute()
const { fetchedUser } = useFetch(`${route.params.id}`)
</script>

<template>
  <Transition name="fade">
    <div
      class="w-[80%] m-h-[500px] p-5 mx-auto rounded-xl border-xl bg-white shadow-lg flex flex-col gap-[70px] dark:bg-slate-800 dark:border-slate-700 transition-colors duration-500"
    >
      <!-- Linear Gradient Background -->
      <div class="relative w-full h-[200px] bg-orange-400 rounded-xl">
        <div
          class="absolute w-full h-full bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl"
        ></div>
        <img
          class="absolute w-40 h-40 rounded-full -bottom-1/3 left-3 border-4 border-white dark:border-slate-800 transition-colors duration-500"
          :src="fetchedUser.picture.large"
          alt="user-profile"
        />
        <!-- Social icons -->
        <div class="flex absolute bottom-3 right-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 bg-opacity-20 transition-colors duration-500"
          >
            <i class="bx bxl-facebook text-white"></i>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 bg-opacity-20 transition-colors duration-500 ml-2"
          >
            <i class="bx bxl-twitter text-white"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 bg-opacity-20 transition-colors duration-500 ml-2"
          >
            <i class="bx bxl-instagram text-white"></i>
          </a>
        </div>
      </div>
      <div class="w-full m-h-[200px] flex flex-col gap-9">
        <div class="w-full flex justify-between">
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
          <div class="w-full flex flex-col justify-start place-items-end">
            <button
              class="flex items-center gap-1 text-sm font-semibold bg-cyan-500 text-white rounded-md px-3 py-2 hover:shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-500 shadow-md dark:bg-cyan-500 dark:hover:bg-cyan-500 transition-shadow duration-500"
            >
              <i class="bx bx-paper-plane"></i>
              Send Message
            </button>
          </div>
        </div>

        <div class="flex w-full justify-center">
          <div class="w-full flex flex-col gap-3">
            <h4
              class="text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"
            >
              <i class="bx" :class="[fetchedUser.gender == 'male' ? 'bx-male' : 'bx-female']"></i>
              {{ fetchedUser.gender }} • {{ fetchedUser.dob.age }} years old
            </h4>
            <h4
              class="text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"
            >
              <i class="bx bxs-envelope"></i>
              {{ fetchedUser.email }}
            </h4>
            <h4
              class="text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"
            >
              <i class="bx bxs-phone"></i>
              {{ fetchedUser.phone }}
            </h4>
          </div>
          <div class="w-full flex flex-col gap-3">
            <h4
              class="text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"
            >
              <i class="bx bxs-buildings"></i>
              {{ fetchedUser.location.city }}, {{ fetchedUser.location.country }}
            </h4>
            <h4
              class="text-base font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-500 leading-5"
            >
              <i class="bx bxs-map-pin"></i>
              {{ fetchedUser.location.street.name }}
              {{ fetchedUser.location.street.number }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
