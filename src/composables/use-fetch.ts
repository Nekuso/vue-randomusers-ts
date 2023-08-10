import { Users } from '@/storage/users-storage'
import type { User } from '@/types/user'

export const useFetchUser = (username: string = '') => {
  const fetchedUser: User = Users.value.find(
    (user: User) => user.login.username === username
  ) as User

  return { fetchedUser }
}
