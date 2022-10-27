import React from 'react'
import { Box, Spacer, Text } from 'ink'

import { useGetLobbiesQuery } from 'features/api/apiSlice'

const List = () => {
  const {
    data: lobbies,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetLobbiesQuery()
  console.log('lobbies', lobbies)
  console.log('isLoading', isLoading)
  console.log('isSuccess', isSuccess)
  console.log('isError', isError)
  console.log('error', error)

  setTimeout(() => {
    console.log('lobbies', lobbies)
    console.log('isLoading', isLoading)
    console.log('isSuccess', isSuccess)
    console.log('isError', isError)
    console.log('error', error)
  }, 1000)

  let content = null
  if (isLoading) {
    content = <Text>Loading...</Text>
  } else if (isError) {
    content = <Text color="red">Something went wrong</Text>
  } else if (isSuccess) {
    content = lobbies.length === 0 ? <Text>None available</Text> : lobbies.map(l => (
      <Box>
        <Text>{l.name}</Text>
        <Spacer />
        <Text>{l.players.length} / {l.maxPlayers}</Text>
      </Box>
    ))
  }

  return <Box flexDirection='column' borderStyle='round' paddingLeft={1}>
    <Text bold>Lobbies</Text>
    <Box marginTop={1}>
      {content}
    </Box>
  </Box>
}

export default List
