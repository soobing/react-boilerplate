import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 30px 20px;
  height: 100%;

  h1 {
    font-size: 18px;
  }
`

const MakeTodoCard = styled.div`
  display: flex;
  margin: 10px 0px;

  & > input {
    width: 100%;
    border: none;
  }
  & > button {
    width: 100px;
    height: 40px;
    margin-left: 10px;
    border: none;
    border-radius: 8px;
    background: #e2e2e2;
  }
`

const List = styled.div`
  margin: 20px 0;
`

const TodoItem = styled.div`
  margin: 10px;
  & > p {
    display: inline-block;
    text-decoration: ${props => props.did ? 'line-through' : ''};
  }

  & > span {
    cursor: pointer;
      :first-of-type {
        margin: 0 10px 0 20px;
      }
  }
`


export default function Todo({ }) {
  const [list, setList] = useState(
    [
      { value: '일기 쓰기', did: false },
      { value: '낮잠 자기', did: false }
    ]
  );
  const inputRef = useRef(null);

  function addItem() {
    setList([...list, { value: inputRef.current.value, did: false }]);
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  function deleteItem(index) {
    setList(list.filter((item, idx) => idx !== index));
  }

  function checkItem(index) {
    setList(list.map((item, idx) => {
      if (idx === index) {
        return {
          ...item,
          did: !item.did
        }
      } else {
        return item;
      }
    }));
  }

  return <Wrapper>
    <h1 className="add-todo-title">Add Todo</h1>
    <MakeTodoCard id="make-todo-card">
      <input ref={inputRef}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log('enter', e.target.value)
            addItem();
          }
        }} />
      <button onClick={addItem}>add</button>
    </MakeTodoCard>
    <List id="todo-list">
      <h1 className="todo-list-title">Todo List</h1>
      {
        list.map((todo, index) => (
          <TodoItem className="todo-list-item" key={index} did={todo.did}>
            <p>{index + 1}. {todo.value}</p>
            <span onClick={() => deleteItem(index)}>❌</span>
            <span onClick={() => checkItem(index)}>✅</span>
          </TodoItem>
        ))
      }
    </List>
  </Wrapper>
}

