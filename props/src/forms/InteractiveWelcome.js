import React, { useState } from 'react'
import Welcome from './../Welcome'

function InteractiveWelcome() {
  const [age, setAge] = useState('')
   const onChangeHandler = (e) => {
    setAge(e.target.value)
  }
  
  return (
    <>
      <label htmlFor='age' name='age'>
        Insert Age:
      </label>
      <input name='age' value={age} onChange={onChangeHandler}></input>
      <Welcome age={age} />
    </>
  )
}
export default InteractiveWelcome
