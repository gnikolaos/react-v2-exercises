import React from 'react'
import { Link } from 'react-router-dom'
import { Age } from './Age'

function Welcome({ name='Garen', age }) {
  return (
    <div className='welcome'>
      <p>Welcome, {name}!</p>
      {age > 18 && age < 65 && name === 'John' && <Age age={age} />}
      <Age age={age} />
      <div>
        <Link to='/counter'>Go to Hook Counter</Link>
      </div>
    </div>
  )
}

export default Welcome

// export default class Welcome extends React.Component {
//   render() {
//     return (
//       <div className='welcome'>
//         <p>Welcome, {this.props.name}!</p>
//         {this.props.age > 18 &&
//           this.props.age < 65 &&
//           this.props.name === 'John' && <Age age={this.props.age} />}
//           <Age age={this.props.age} />
//       </div>
//     )
//   }
// }

// Welcome.defaultProps = {
//   name: 'Garen',
// }
