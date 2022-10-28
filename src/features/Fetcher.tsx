import React from 'react'
import { Box, Text } from 'ink'
import { useGetQuery } from './api/apiSlice'
import Spinner from 'ink-spinner'

const Fetcher = () => {
  const { data, isLoading } = useGetQuery()

  if (isLoading) {
    return <Box>
      <Spinner />
      <Text> Loading...</Text>
    </Box>
  }

  return <Text>
    OK? {data?.ok}
  </Text>
}

export default Fetcher
