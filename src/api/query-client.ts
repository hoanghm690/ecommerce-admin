import { keepPreviousData, QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      gcTime: 1000 * 60 * 15, // 15min
      retry: 0,
      staleTime: 1000 * 60 * 30, // 30min
      throwOnError: true,
      placeholderData: keepPreviousData
    }
  }
})
