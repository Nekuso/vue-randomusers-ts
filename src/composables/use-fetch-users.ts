import { ref } from 'vue'
import type { User } from '@/types/user'
import { handlePagination } from './use-pagination'

export const Users = ref<User[]>([])
export const usersPerPage = ref<number>(7)

export const useFetchUsers = (amount: number = 7, gender: string = 'all', pagePerUser?: number) => {
  const fetchUsers = async () => {
    const response: any = await fetch(
      `https://randomuser.me/api/?results=${amount}&gender=${gender === 'all' ? '' : gender}`
    )
    const { results } = await response.json()
    Users.value = results
    console.log(Users.value)
  }

  usersPerPage.value = pagePerUser || 7
  fetchUsers()
  handlePagination()
}
