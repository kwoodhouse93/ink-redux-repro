import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from 'features/api/apiSlice'

const store = configureStore({
  reducer: {
    // feature: featureReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
