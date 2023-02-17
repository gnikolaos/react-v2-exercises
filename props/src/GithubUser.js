import useGithubUser from './useGithubUser'

function GithubUser({ username = 'dizars1776' }) {
  const { data, loading, error } = useGithubUser(username)
  return (
    <div>
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
