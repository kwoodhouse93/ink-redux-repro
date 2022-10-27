import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'

import type { Lobby } from './types'

// Define a type for the slice state
interface LobbiesState {
  list: Lobby[]
}

// Define the initial state using that type
const initialState: LobbiesState = {
  list: []
}

export const lobbiesSlice = createSlice({
  name: 'lobbies',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Lobby[]>) => {
      state.list.push(...action.payload)
    },
    remove: (state, action: PayloadAction<Lobby[]>) => {
      return {
        ...state,
        list: state.list.filter(lobby => !action.payload.includes(lobby))
      }
    },
  }
})

export const { add, remove } = lobbiesSlice.actions

export const selectLobbies = (state: RootState) => state.lobbies.list
export const selectLobbyById = (state: RootState, id: string) => state.lobbies.list.find(lobby => lobby.id === id)

export default lobbiesSlice.reducer
