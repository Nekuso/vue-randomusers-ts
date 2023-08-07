<script setup lang="ts">
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  setCurrentPage: {
    type: Function,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  displayPages: {
    type: Array,
    required: true
  },
  nextPage: {
    type: Function,
    required: true
  },
  prevPage: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <ul class="flex justify-center items-center w-auto h-10 text-base">
    <li>
      <button
        @click="prevPage()"
        class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300"
      >
        <span class="sr-only">Previous</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
    </li>
    <li v-for="page in displayPages">
      <button
        @click="setCurrentPage(page)"
        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300"
        :class="
          currentPage === page
            ? 'bg-gray-300 font-bold text-gray-700 dark:bg-gray-700 dark:text-white'
            : ''
        "
      >
        {{ page }}
      </button>
    </li>
    <li>
      <button
        @click="nextPage()"
        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-300"
      >
        <span class="sr-only">Next</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </li>
  </ul>
</template>
