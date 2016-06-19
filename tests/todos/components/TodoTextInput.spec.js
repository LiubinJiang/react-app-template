'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TodoTextInput from '../../../src/todos/components/TodoTextInput'

function setup (propOverrides) {
  const props = Object.assign({
    text: 'my task',
    placeholder: 'do it',
    editing: false,
    newTodo: false
  }, propOverrides)

  const component = shallow (
    <TodoTextInput {...props} />
  )

  return {
    component: component,
  }
}

describe ('TodoTextInput component', () => {
    it ('should render correctly', () => {
      const { component } = setup ()
      expect(component.find('input')).to.have.length(1)
      expect(component.find('input').at(0).prop('placeholder')).to.equal('do it')
      expect(component.find('input').at(0).prop('value')).to.equal('my task')
      expect(component.find('input').at(0).prop('className')).to.equal('')
    })

    it ('should render correctly when editing=true', () => {
      const { component } = setup ({ editing: true })
      expect(component.find('input').at(0).prop('className')).to.equal('edit')
    })

    it('should render correctly when newTodo is true', () => {
      const { component } = setup ({ newTodo: true })
      expect(component.find('input').at(0).prop('className')).to.equal('newTodo')
    })

    it ('should update value on change', () => {
      const { props, component } = setup ()
      component.find('input').at(0).simulate ('change', { target: { value: 'task' }})
      expect(component.find('input').at(0).prop('value')).to.equal('task')
    })
})
