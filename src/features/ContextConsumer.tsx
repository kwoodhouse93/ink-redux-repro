import React from 'react'
import { Box, Text } from 'ink'
import Spinner from 'ink-spinner'
import { useDefaultContext } from 'app/context'

const ContextConsumer = () => {
  const value = useDefaultContext()

  console.log('render: ', value)

  if (value === 0) {
    return <Box key='loading'>
      <Spinner />
      <Text> Loading...</Text>
    </Box>
  }

  return <Text key='ok'>
    OK? {value}
  </Text>
}

export default ContextConsumer
