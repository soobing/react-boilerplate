import React, { Component } from 'react';

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
  render() {
    return <div>
      {
        this.state.todoList.map((item, index) => {
          return <div key={index} style={{ background: 'pink', margin: '5px' }}>
            <span style={{ marginRight: '5px', cursor: 'pointer' }}
              onClick={() => this.setState({
                todoList: [
                  ...this.state.todoList.slice(0, index),
                  {
                    ...item,
                    isChecked: !item.isChecked
                  },
                  ...this.state.todoList.slice(index + 1, this.state.todoList.length)
                ]
              })}>
              {
                item.isChecked ? '♥ ' : '♡'
              }
            </span>
            {
              item.value
            }
          </div>
        })
      }
    </div >
  }
}

export default TodoList;