import { ref, computed } from 'vue'
import { Users } from '@/storage/users-storage'
import type { User } from '@/types/user'
import { usersPerPage } from '@/storage/users-storage'

export function handlePagination() {
  const currentPage = ref<number>(1)
  const pages = computed(() => Math.ceil(Users.value.length / usersPerPage.value))
  const paginatedUsers = computed<User[]>(() => {
    const start = (currentPage.value - 1) * usersPerPage.value
    const end = currentPage.value * usersPerPage.value
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
