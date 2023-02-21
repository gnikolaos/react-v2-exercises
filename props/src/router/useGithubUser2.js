import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

function useGithubUser(username) {
 const { data, error, mutate } = useSWR((username !== null) ? `https://api.github.com/users/${username}` : null, fetcher)
 
 function reFetch() {
  mutate()
 }

 return { 
    users: data,
    error,
    isLoading: !data && !error,
    onRefresh: reFetch
  }
}

export default useGithubUser
