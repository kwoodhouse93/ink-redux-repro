import React from 'react'
import { Text } from 'ink'
import usePing from 'hooks/usePing'

const Ping = () => {
  const ping = usePing()

  if (ping === -1) {
    return <Text color='red'>
      Connection lost
    </Text>
  }

  const color = ping < 100 ? 'green' : ping < 200 ? 'yellow' : 'red'

  return <Text>
    Ping <Text color={color}>{ping}</Text> ms
  </Text>
}

export default Ping
