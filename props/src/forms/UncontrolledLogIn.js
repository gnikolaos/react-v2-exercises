import React from 'react'

class UncontrolledLogIn extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onLogin({
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
      checkbox: e.target.elements.checkbox.checked,
    })
  }

  render() {
    return (
      <>
        <h2>Uncontrolled Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>
            Username:&nbsp;
            <input name='username' required onKeyUp={this.handleKeyUp} />
          </label>
          <br />
          <label htmlFor='password'>
            Password:&nbsp;
            <input
              name='password'
              type='password'
              required
              onKeyUp={this.handleKeyUp}
            />
          </label>
          <br />
          <label htmlFor='checkbox'>
            Remember me?&nbsp;
            <input name='checkbox' type='checkbox' />
          </label>
          <br />
          <button
            ref={this.submitElRef}
            name='submit'
            type='submit'
            className='submit-button'
          >
            Log in
          </button>
          &nbsp;
          <input type='reset' />
        </form>
      </>
    )
  }
}

export default UncontrolledLogIn
