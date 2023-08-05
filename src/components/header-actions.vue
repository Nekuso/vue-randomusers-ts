<script setup lang="ts">
import { ref, watch } from 'vue'
import { useFetchUsers, Users } from '@/composables/use-fetch-users'

const amountInput = ref<number>(10)
const genderInput = ref<string>('all')

watch(
  genderInput,
  () => {
    console.log(genderInput)
    //   useFetchUsers(amountInput.value)
  },
  { deep: true }
)

function submitPrompt() {
  Users.value = []
  useFetchUsers(amountInput.value)
}
</script>

<template>
  <div class="w-full flex justify-between place-items-center">
    <h2 class="text-2xl font-semibold">Users</h2>

    <div class="w-auto flex gap-2 place-items-center">
      <div
        class="w-21 h-9 border rounded-3xl flex justify-center place-items-center overflow-hidden"
      >
        <button
          @click="amountInput--"
          class="px-6 h-full hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          -
        </button>
        <input
          label="Number of users"
          v-model="amountInput"
          class="w-12 text-center focus:outline-none"
          type="number"
        />
        <button
          @click="amountInput++"
          class="px-6 h-full hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          +
        </button>
      </div>
      <!-- Select all, male, female -->
      <select
        v-model="genderInput"
        class="w-30 h-9 border rounded-3xl flex justify-center place-items-center overflow-hidden px-7 appearance-none custom-select-arrow text-center cursor-pointer focus"
      >
        <option class="text-center" value="all" selected>All</option>
        <option class="text-center" value="male">Male</option>
        <option class="text-center" value="female">Female</option>
      </select>
      <button
        @click="submitPrompt"
        class="w-28 h-10 shadow-lg rounded-3xl bg-black hover:bg-gray-600 transition duration-300 ease-in-out text-white"
      >
        Generate
      </button>
    </div>
  </div>
</template>
