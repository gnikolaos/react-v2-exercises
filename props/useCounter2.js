import { useCallback, useState } from 'react'

function useCounter(initValue = 0) {
  const [value, setValue] = useState(initValue)

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setValue((v) => v + 1)
  }, [])

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setValue((v) => v - 1)
  }, [])

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setValue(initValue)
    },
    [initValue]
  )

  return {
    value: value,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  }
}

export default useCounter
