import React from 'react'
import { Box, Spacer, Text } from 'ink'
import Ping from './Ping'

const Header = () => {
  return <Box height={3} borderStyle='round' paddingLeft={1} paddingRight={1}>
    <Text>Player #1</Text>
    <Spacer />
    <Ping />
  </Box>
}

export default Header
