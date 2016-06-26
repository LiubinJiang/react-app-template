'use strict'

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    if (this.state.editing) {
      return (
        <li className = { classnames ({ completed: todo.completed,
                                      editing: this.state.editing })}>
          <TodoTextInput text = { todo.text } editing = { this.state.editing } />
        </li>
      )
    } else {
      return (
        <li className={ classnames ({ completed: todo.completed,
                                      editing: this.state.editing })}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={ todo.completed }
                   onChange={ () => completeTodo (todo.id) }  />
            <label onDoubleClick= { () => this.handleDoubleClick () }>
              { todo.text }
            </label>
            <button className="destroy" onClick={ () => deleteTodo (todo.id) } />
          </div>
        </li>
      )
    }
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem