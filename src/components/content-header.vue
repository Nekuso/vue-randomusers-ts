<script setup lang="ts">
import { ref } from 'vue'
import { useFetchUsers, Users } from '@/composables/use-fetch-users'

const amountInput = ref<number>(7)
const genderInput = ref<string>('all')
const pageInput = ref<number>(7)

function submitPrompt() {
  Users.value = []
  useFetchUsers(amountInput.value, genderInput.value, pageInput.value)
}
</script>

<template>
  <div class="w-full flex justify-between place-items-center">
    <h2 class="text-xl font-semibold dark:text-slate-100 transition-colors duration-500">Users</h2>

    <div class="w-auto flex gap-2 place-items-center">
      <div
        class="w-21 h-10 border rounded-3xl flex justify-center place-items-center overflow-hidden bg-white dark:text-slate-100 transition-colors duration-500 dark:border-slate-800 dark:bg-transparent"
      >
        <button
          @click="amountInput--"
          class="px-5 h-full hover:bg-black hover:text-white transition-colors duration-300 ease-in-out dark:hover:bg-slate-600"
        >
          -
        </button>
        <input
          title="Number of users"
          v-model="amountInput"
          class="w-16 text-center focus:outline-none bg-transparent dark:text-slate-100 transition-colors duration-500 border-none focus:ring-0"
          type="number"
        />
        <button
          @click="amountInput++"
          class="px-5 h-full hover:bg-black hover:text-white transition-colors duration-300 ease-in-out dark:hover:bg-slate-600"
        >
          +
        </button>
      </div>
      <select
        title="Select a gender"
        v-model="genderInput"
        class="w-30 h-10 border border-slate-200 rounded-3xl flex justify-center place-items-center overflow-hidden px-7 appearance-none custom-select-arrow text-center cursor-pointer bg-white dark:border-slate-800 dark:text-slate-100 transition-colors duration-500 dark:bg-slate-900 focus:ring-0 focus:outline-none"
      >
        <option value="all" selected>All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div
        class="w-21 h-10 border rounded-3xl flex justify-center place-items-center overflow-hidden bg-white dark:text-slate-100 transition-colors duration-500 dark:border-slate-800 dark:bg-transparent"
      >
        <input
          title="Users per page"
          v-model="pageInput"
          class="w-16 text-center focus:outline-none bg-transparent dark:text-slate-100 transition-colors duration-500 border-none focus:ring-0"
          type="number"
        />
      </div>
      <button
        @click="submitPrompt"
        class="submitBtn w-36 h-10 shadow-lg rounded-3xl bg-black text-white flex justify-center place-items-center gap-2 dark:bg-gray-700"
      >
        <svg
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          data-name="Layer 1"
          id="Layer_1"
          class="sparkle h-4 w-4"
        >
          <path
            d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"
          ></path>
        </svg>
        <span class="text text-sm">Generate</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.submitBtn {
  transition: all 0.3s ease-in-out;
}

.text {
  transition: all 0.3s ease-in-out;
}

.sparkle {
  transition: all 0.3s ease-in-out;
}

.submitBtn:hover {
  /* background: linear-gradient(0deg,#A47CF3,#683FEA); */
  background-color: #9917ff;
  box-shadow:
    inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
    inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 4px rgba(255, 255, 255, 0.2),
    0px 0px 180px 0px #9917ff;
  transform: translateY(-2px);
}

.submitBtn:hover .text {
  color: white;
  font-weight: 700;
}

.submitBtn:hover .sparkle {
  fill: white;
  transform: scale(1.4);
}
</style>
