import { ref } from 'vue'
import type { User } from '@/types/user'

export const Users = ref<User[]>([])

export const useFetchUsers = (amount: number = 10, gender: string = 'all') => {
  const fetchUsers = async () => {
    const response: any = await fetch(
      `https://randomuser.me/api/?results=${amount}&gender=${gender === 'all' ? '' : gender}`
    )
    const { results } = await response.json()
    Users.value = results
    console.log(Users.value)
  }
  fetchUsers()
}
