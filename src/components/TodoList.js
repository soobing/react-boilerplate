import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 0,
          value: 'yoga'
        },
        {
          id: 1,
          value: 'lunch'
        },
        {
          id: 2,
          value: 'work'
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
            value={item.value} />
        })
      }
    </div >
  }
}

export default TodoList;