import useGithubUser from '../useGithubUser'

function GithubUser({ username = 'dizars1776' }) {
  const { data, onFetchUser, loading, error } = useGithubUser(username)

  function handleGetUserData() {
    onFetchUser(username)
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Load user data</button>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
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
