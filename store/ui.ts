import { defineStore } from 'pinia'
import { useWindowSize } from '@vueuse/core'

export const useUiStore = defineStore('ui', () => {
  const { width } = useWindowSize()

  const isSidebarShown = ref(false)

  return { isSidebarShown }
})
