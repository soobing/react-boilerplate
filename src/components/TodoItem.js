import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }
  componentDidMount() {
    console.log('자식 componentDidMount')
  }
  componentDidUpdate() {
    console.log('자식 componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('자식 componentWillUnmount')
  }

  render() {
    return <div style={{ background: 'pink', margin: '5px' }}>
      <span style={{ marginRight: '5px', cursor: 'pointer' }}
        onClick={() => {
          this.setState({
            isChecked: !this.state.isChecked
          })
        }}>
        {
          this.state.isChecked ? '♥ ' : '♡'
        }
      </span>
      {
        this.props.value
      }
    </div >
  }
}

export default TodoItem;