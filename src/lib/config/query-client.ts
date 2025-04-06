import { keepPreviousData, QueryClient } from '@tanstack/react-query'

import { RoutePaths, StorageKey } from '@/constants'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      throwOnError: true,
      placeholderData: keepPreviousData,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      retry: (failureCount, error: any) => {
        // Don't retry on 401 unauthorized
        if (error?.response?.status === 401) {
          // Clear credentials and reload page to trigger auth flow
          localStorage.removeItem(StorageKey.CREDENTIAL)
          window.location.href = RoutePaths.LOGIN
          return false
        }
        return failureCount < 1
      }
    },
    mutations: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      retry: (failureCount, error: any) => {
        // Don't retry on 401 unauthorized
        if (error?.response?.status === 401) {
          // Clear credentials and reload page to trigger auth flow
          localStorage.removeItem(StorageKey.CREDENTIAL)
          window.location.href = RoutePaths.LOGIN
          return false
        }
        return failureCount < 1
      }
    }
  }
})
