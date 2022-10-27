import { useEffect, useState } from 'react'
import { useStdout } from 'ink'

type ScreenSize = {
  width: number
  height: number
}

export const useScreenSize = (): ScreenSize => {
  const { stdout } = useStdout()

  const [size, setSize] = useState<ScreenSize>(() => {
    if (stdout === undefined) return { width: 0, height: 0 }
    return {
      width: stdout.columns,
      height: stdout.rows,
    }
  })

  useEffect(() => {
    if (stdout === undefined) return

    const onResize = () => {
      if (stdout === undefined) return
      setSize({
        width: stdout.columns,
        height: stdout.rows,
      })
    }

    stdout.on(`resize`, onResize)
    return () => void stdout.off(`resize`, onResize)
  }, [stdout])

  return size
}
