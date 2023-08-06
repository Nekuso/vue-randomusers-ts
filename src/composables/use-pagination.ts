import { ref, computed } from 'vue'
import { Users } from '@/composables/use-fetch-users'
import type { User } from '@/types/user'

export function handlePagination(usersPerPage: number = 7) {
  const currentPage = ref(1)
  const pages = computed(() => Math.ceil(Users.value.length / usersPerPage))
  const paginatedUsers = computed<User[]>(() => {
    const start = (currentPage.value - 1) * usersPerPage
    const end = currentPage.value * usersPerPage
    return Users.value.slice(start, end)
  })

  const nextPage = () => {
    if (currentPage.value < pages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }
  return {
    currentPage,
    pages,
    paginatedUsers,
    nextPage,
    prevPage
  }
}
