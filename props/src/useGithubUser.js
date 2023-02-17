import { useState } from 'react'

function useGithubUser() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchGithubUser(username) {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const json = await response.json()
      setData(json)
    } catch (error) {
      setError(error)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, onFetchUser: fetchGithubUser }
}

export default useGithubUser
