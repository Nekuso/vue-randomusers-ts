import { ref } from 'vue'
import type { User } from '@/types/user'

export const Users = ref<User[]>([])

export const usersPerPage = ref<number>(7)
