import { Link } from 'react-router-dom'

function NavBar() {
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
          <Link to='/users/'>Github User List</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
