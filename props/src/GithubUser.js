import { useEffect, useState } from 'react'

function GithubUser({ username = 'dizars1776' }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setData(json)
      })
  }, [username])

  return (
    <div>
      {data && (
        <div>
          <h1>{data.name}</h1>
          <img
            src={data.avatar_url}
            height='200px'
            style={{ borderRadius: '50%' }}
            alt='profile avatar'
          />
        </div>
      )}
    </div>
  )
}

export default GithubUser
