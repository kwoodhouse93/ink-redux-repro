import { useEffect, useState } from 'react'
import { useClient } from './useClient'

const usePing = () => {
  const client = useClient()

  const [doPing, setDoPing] = useState(true)
  const [ping, setPing] = useState(0)

  useEffect(() => {
    if (!doPing) return
    setDoPing(false)

    const start = new Date()
    client.get('/ping')
      .then(response => {
        if (response.status === 200) {
          const end = new Date()
          setPing(end.getTime() - start.getTime())
        }
      })
      .catch(() => {
        setPing(-1)
      })

    setTimeout(() => {
      setDoPing(true)
    }, 1000)
  }, [doPing])

  return ping
}

export default usePing
