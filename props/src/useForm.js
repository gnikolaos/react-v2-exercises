import { useState } from 'react'

function useForm(props) {
  const initValue = {
    username: '',
    password: '',
  }

  const [inputValue, setInputValue] = useState(initValue)

  function handleChange(e) {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]:  e.target.value,
    }))
  }

  function handleReset(e) {
    e.preventDefault()
    setInputValue(initValue)
  }

  return {
    inputValue: inputValue,
    onChange: handleChange,
    onReset: handleReset,
  }
}

export default useForm
