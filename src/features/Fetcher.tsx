import React, { useEffect, useState } from 'react'
import { Box, Text } from 'ink'
import { useGetQuery } from './api/apiSlice'
import Spinner from 'ink-spinner'

const Fetcher = () => {
  const { data, isLoading } = useGetQuery()

  if (isLoading) {
    return <Box key='loading'>
      {/* <Spinner /> */}
      <Text> Loading...</Text>
    </Box>
  }

  return <Text key='ok'>
    OK? {data?.ok}
  </Text>
}

export default Fetcher
