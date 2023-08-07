import { ref, computed } from 'vue'
import { Users } from '@/composables/use-fetch-users'
import type { User } from '@/types/user'

export function handlePagination(usersPerPage: number = 7) {
  const currentPage = ref<number>(1)
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

  const setCurrentPage = (page: number) => {
    currentPage.value = page
  }

  const displayPages = computed(() => {
    const currentPageIndex: number = currentPage.value
    const totalPages: number = pages.value
    const adjacentPagesCount: number = 2

    const startPage: number = Math.max(1, currentPageIndex - adjacentPagesCount)
    const endPage: number = Math.min(totalPages, currentPageIndex + adjacentPagesCount)

    const displayedPages: number[] = []
    for (let i = startPage; i <= endPage; i++) {
      displayedPages.push(i)
    }

    return displayedPages
  })

  return {
    currentPage,
    pages,
    paginatedUsers,
    nextPage,
    prevPage,
    setCurrentPage,
    displayPages
  }
}
