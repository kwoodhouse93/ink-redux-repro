import React, { useEffect, useState } from 'react'
import { Text } from 'ink'
import { useClient } from 'hooks/useClient'

const Ping = () => {
  const client = useClient()

  const [doPing, setDoPing] = useState(true)
  const [ping, setPing] = useState(0)

  useEffect(() => {
    if (!doPing) return
    setDoPing(false)

    const start = new Date()
    client.get('/ping')
      .then((response: any) => response.data)
      .then((d: any) => {
        if (d === 'pong') {
          const end = new Date()
          setPing(end.getTime() - start.getTime())
        }
      })

    setTimeout(() => {
      setDoPing(true)
    }, 1000)
  }, [doPing])

  const color = ping < 100 ? 'green' : ping < 200 ? 'yellow' : 'red'

  return <Text>
    Ping <Text color={color}>{ping}</Text> ms
  </Text>
}

export default Ping
