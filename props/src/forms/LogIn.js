import { useState } from 'react'

function LogIn(props) {
  const initialState = {
    username: '',
    password: '',
    checkbox: false,
  }

  const [inputValue, setInputValue] = useState(initialState)

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onLogin(inputValue)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setInputValue(initialState)
  }

  return (
    <div>
      <h2>Log In Form</h2>
      <form>
        <label htmlFor='username'>
          Username:&nbsp;
          <input
            name='username'
            value={inputValue.username}
            onChange={handleChange}
          ></input>
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
            checked={inputValue.checkbox}
            type='checkbox'
            onChange={handleChange}
          ></input>
        </label>
        <br />

        <button
          name='submit-button'
          type='submit'
          className='submit-button'
          disabled={!inputValue.username || !inputValue.password}
          onClick={handleSubmit}
        >
          Log in
        </button>
        <button name='reset-button' type='button' onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  )
}

export default LogIn
