import { useEffect, useState } from 'react'

function HookClickCounter({ initValue = 0 }) {
  const [value, setValue] = useState(initValue)

  function handleClick() {
    setValue(value+1)
  }
  
  function onCounterChange(e) {
    console.log(`i am called. value is ${e}`)
  }

  useEffect(()=> {
    return () => onCounterChange(value+1) 
  }, [value])

  return (
    <div>
      <h3>Click Component (hook)</h3>
      <p>Current value: {value}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default HookClickCounter
