import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{ background: 'pink', margin: '5px' }}>
      <span style={{ marginRight: '5px', cursor: 'pointer' }}
        onClick={this.props.onClick}>
        {
          this.props.isChecked ? '♥ ' : '♡'
        }
      </span>
      {
        this.props.value
      }
    </div>
  }
}

export default TodoItem;