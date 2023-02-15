import { useState } from 'react'

function LogIn() {
  const [inputValue, setInputValue] = useState({
    password: '',
    username: '',
    checkbox: false,
  })

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setInputValue(prev => ({
      ...prev,
      [e.target.name]: value
    }))
  }

  return (
    <div>
      <h2>Log In Form</h2>
      <div>
        <label htmlFor='username'>
          Username:&nbsp;
          <input name='username' value={inputValue.username} onChange={handleChange}></input>
        </label>
        <br />

        <label htmlFor='password'>
          Password:&nbsp;
          <input
            name='password'
            value={inputValue.password}
            type='password'
            onChange={handleChange}
          ></input>
        </label>
        <br />

        <label htmlFor='checkbox'>
          Remember me?&nbsp;
          <input
            name='checkbox'
            value={inputValue.checkbox}
            type='checkbox'
            onChange={handleChange}
          ></input>
        </label>
      </div>
    </div>
  )
}

export default LogIn
