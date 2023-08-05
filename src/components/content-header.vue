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
        class="w-21 h-10 border rounded-3xl flex justify-center place-items-center overflow-hidden"
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
        class="w-30 h-10 border rounded-3xl flex justify-center place-items-center overflow-hidden px-7 appearance-none custom-select-arrow text-center cursor-pointer focus"
      >
        <option class="text-center" value="all" selected>All</option>
        <option class="text-center" value="male">Male</option>
        <option class="text-center" value="female">Female</option>
      </select>
      <button
        @click="submitPrompt"
        class="submitBtn w-36 h-10 shadow-lg rounded-3xl bg-black text-white flex justify-center place-items-center gap-2"
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
  background-color: black;
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
