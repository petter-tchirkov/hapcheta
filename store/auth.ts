import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = useCookie('access_token', {
    default: () => null,
    watch: true,
    maxAge: 1800,
  })

  return { token }
})
