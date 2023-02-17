import { useEffect, useState } from 'react'
import { CounterDisplay } from './CounterDisplay'

function HookCounter({
  initValue = 0,
  incrementValue = 1,
  incrementInterval = 1000,
}) {
  const [value, setValue] = useState(initValue)

  useEffect(() => {
    const myInterval = setInterval(() => {
      setValue(value + incrementValue)
    }, incrementInterval)

    return () => {
      clearInterval(myInterval)
    }
  }, [value, incrementValue, incrementInterval])

  return <CounterDisplay countState={value} />
}

export default HookCounter
