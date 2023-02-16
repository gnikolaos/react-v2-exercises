import React from 'react'

class TodoList extends React.Component {
  state = {
    todoListItems: [],
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.listItems = this.state.todoListItems
    this.listItems.push(e.target.elements.todo.value)
    this.setState({
      todoListItems: this.listItems,
    })
    e.target.elements.todo.value = ''
  }

  handleDelete = (e) => {
    e.preventDefault()
    this.listItems.splice(e.target.id, 1)
    this.setState({
      todoListItems: this.listItems,
    })
  }

  render() {
    return (
      <>
        <h2>Todo List</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='todo'>
            Todo:&nbsp;
            <input name='todo' required />
          </label>
          &nbsp;
          <button type='submit'>Add</button>
          &nbsp;
          <button
            type='button'
            onClick={() => this.setState({ todoListItems: [] })}
          >
            Reset
          </button>
        </form>
        <div>
          <ul>
            {this.props.render(this.state.todoListItems, this.handleDelete)}
          </ul>
        </div>
      </>
    )
  }
}

export default TodoList
