import { ref } from 'vue'

export const isDarkMode = ref<boolean>(false)
export function useDarkMode() {

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    console.log('Dark mode is now', isDarkMode.value ? 'on' : 'off')
  }

  return {
    toggleDarkMode
  }
}
