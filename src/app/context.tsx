import React, { useContext, useEffect, useState } from 'react'

const defaultContext = React.createContext(0)

export const DefaultContextProvider = ({ children }: React.PropsWithChildren) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const Provider = defaultContext.Provider
  return (
    <Provider value={count}>
      {children}
    </ Provider>
  )
}

export const useDefaultContext = () => useContext(defaultContext)
