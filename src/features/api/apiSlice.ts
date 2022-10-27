import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { Lobby } from 'features/lobbies/types'

const serverHost = 'http://localhost:8080'

const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<
  {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  },
  unknown,
  unknown
> =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const apiSlice = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: serverHost }),
  endpoints: builder => ({
    getLobbies: builder.query<Lobby[], void>({
      query: () => ({ url: '/lobbies', method: 'GET' }),
      onQueryStarted: (args, { dispatch, queryFulfilled }) => {
        console.log('getLobbies started')
      },
      transformResponse: (response: { lobbies: Lobby[] }) => {
        console.log('getLobbies response: ', response)
        return response.lobbies.map(r => ({ ...r, maxPlayers: 2 }))
      },
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetLobbiesQuery } = apiSlice
