import { createApi } from '@reduxjs/toolkit/query/react'

type MyResp = {
  ok: boolean
}

const customBaseQuery = () => {
  return { data: { ok: true } }
}

export const apiSlice = createApi({
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    get: builder.query<MyResp, void>({
      query: () => '/endpoint',
      transformResponse: (response: MyResp) => {
        console.log(response)
        return response
      },
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetQuery } = apiSlice
