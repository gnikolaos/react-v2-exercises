import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function GithubUserList({ usernames = [] }) {
  const [usernameArray, setUsernameArray] = useState(usernames)

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    e.target.username.value = ''
    setUsernameArray((prev) => [...prev, username])
  }

  return (
    <div>
      <h2>Github User List</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          <input name='username' placeholder='username...' />
        </label>
        &nbsp;
        <button type='submit'>Fetch</button>
      </form>
      <div>
        <ul>
          {usernameArray &&
            usernameArray.map((username, index) => {
              return (
                <li key={username + index}>
                  <Link to={`${username}`}>{username}</Link>
                </li>
              )
            })}
        </ul>
      </div>

      <Outlet />
    </div>
  )
}

export default GithubUserList
