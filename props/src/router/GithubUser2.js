import useGithubUser from './useGithubUser2'

function GithubUser({ username = 'dizars1776' }) {
  const { users, isLoading, error, onRefresh } = useGithubUser(username)

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      {users && (
        <div>
          <h1>{users.name}</h1>
          <img
            src={users.avatar_url}
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
