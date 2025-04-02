import { parseAsIndex, parseAsInteger, useQueryStates } from 'nuqs'

const paginationParsers = {
  pageIndex: parseAsIndex.withDefault(0),
  pageSize: parseAsInteger.withDefault(10)
}

const paginationUrlKeys = {
  pageIndex: 'page',
  pageSize: 'limit'
}

export function usePagination() {
  const [{ pageIndex, pageSize }, setPagination] = useQueryStates(paginationParsers, {
    urlKeys: paginationUrlKeys
  })

  return {
    pagination: {
      page: pageIndex + 1,
      limit: pageSize
    },
    setPagination
  }
}
