import React from 'react'

class TodoList extends React.Component {
  state = {
    todoListItems: [],
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let listItems = this.state.todoListItems
    listItems.push(e.target.elements.todo.value)
    this.setState({
      todoListItems: listItems,
    })
    e.target.elements.todo.value = ''
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

          <button type='submit'>Add</button>
        </form>
        <div>
          <ul>
            {this.state.todoListItems.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default TodoList
