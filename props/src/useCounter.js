import { useState } from 'react'

function useCounter(initValue = 0) {
  const [value, setValue] = useState(initValue)

  function handleCounterIncrement() {
    setValue((v) => v + 1)
  }

  function handleCounterDecrement() {
    setValue((v) => v - 1)
  }

  function handleCounterReset() {
    setValue(initValue)
  }

  return {
    value: value,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  }
}

export default useCounter
