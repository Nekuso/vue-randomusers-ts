import { Users } from '../storage/users-storage'
import { usersPerPage } from '../storage/users-storage'
import { handlePagination } from './use-pagination'

export const fetchApi = () => {
  const get = async (
    url: string = 'https://randomuser.me/api/',
    params: any,
    pagePerUser: number = 7
  ) => {
    try {
      const response: any = await fetch(`${url}?${params.toString()}`)
      const { results } = await response.json()
      Users.value = results
      console.log(`${url}?${params.toString()}`)

      usersPerPage.value = pagePerUser || 7
      handlePagination()
    } catch (error) {
      console.error(error)
    }
  }

  return { get }
}
