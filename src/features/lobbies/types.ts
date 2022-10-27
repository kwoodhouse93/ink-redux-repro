import type { Player } from 'features/players/types'

export type Lobby = {
  id: string
  name: string
  players: Player[]
  maxPlayers: 2
}
