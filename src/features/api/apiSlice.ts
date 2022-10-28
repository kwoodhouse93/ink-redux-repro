import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const serverHost = 'http://localhost:8080'

type Response = {
  ok: boolean
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: serverHost }),
  endpoints: builder => ({
    get: builder.query<Response, void>({
      query: () => '/endpoint',
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetQuery } = apiSlice
