import { ref } from 'vue'

export const useFetchUsers = async () => {
  const users: object[] = []

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  data.forEach((user: object) => {
    users.push(user)
  })
  console.log(users)

  return {
    users
  }
}
