import { fetchApi } from './fetch-api'

export const useFetchUsers = (amount: number = 7, gender: string = 'all', pagePerUser?: number) => {
  const params = new URLSearchParams({
    results: amount.toString(),
    gender
  })

  const { get } = fetchApi()
  get('https://randomuser.me/api/', params, pagePerUser)
}
