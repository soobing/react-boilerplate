import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 0,
          value: 'yoga',
          isChecked: false
        },
        {
          id: 1,
          value: 'lunch',
          isChecked: false
        },
        {
          id: 2,
          value: 'work',
          isChecked: false
        }
      ]
    }
  }

  componentDidMount() {
    console.log('부모 componentDidMount')
  }
  componentDidUpdate() {
    console.log('부모 componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('부모 componentWillUnmount')
  }
  render() {
    return <div>
      {
        this.state.todoList.map((item, index) => {
          return <TodoItem
            key={index}
            value={item.value}
            isChecked={item.isChecked}
            onClick={() => this.setState({
              todoList: [
                ...this.state.todoList.slice(0, index),
                {
                  ...item,
                  isChecked: !item.isChecked
                },
                ...this.state.todoList.slice(index + 1, this.state.todoList.length)
              ]
            })} />
        })
      }
    </div >
  }
}

export default TodoList;