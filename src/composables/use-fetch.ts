import { Users } from '@/composables/use-fetch-users'
import type { User } from '@/types/user'

export const useFetch = (username: string = '') => {
  const fetchedUser: User = Users.value.find(
    (user: User) => user.login.username === username
  ) as User

  return { fetchedUser }
}
