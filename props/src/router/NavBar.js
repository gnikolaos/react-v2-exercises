import { Link } from 'react-router-dom'

function NavBar() {
  const username = 'dizars1776'
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Welcome</Link>
        </li>
        <li>
          <Link to='/counter'>Hook Counter</Link>
        </li>
        <li>
          <Link to={`/users/${username}`}>Show Github user: {username}</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
