import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const token = ref<string | null>(null)
let isInitialized = false

const initFromStorage = () => {
  if (isInitialized) return

  const storedToken = localStorage.getItem('token')
  if (storedToken) {
    token.value = storedToken
  }
  isInitialized = true
}
initFromStorage()

watch(
  token,
  (newToken) => {
    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      localStorage.removeItem('token')
    }
  },
  { immediate: false },
)

export const useAuth = () => {
  const router = useRouter()
  const isAuthenticated = computed(() => !!token.value)

  const login = (authToken: string) => {
    console.log('Logging in with token:', authToken)
    token.value = authToken
  }

  const logout = () => {
    console.log('Logging out...')
    token.value = null
    console.log('token after logout:', token.value)
    console.log('is auth:', !!token.value)
    router.push('/')
  }

  return {
    token: computed(() => token.value),
    isAuthenticated,
    login,
    logout,
  }
}
