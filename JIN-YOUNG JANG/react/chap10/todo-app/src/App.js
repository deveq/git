import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id : i,
      text :`할일${i}`,
      checked : false
    })
  }
  return array;
}

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'INSERT' : //새로 추가
      // { type : 'INSERT', todo : { id : 1, text : 'todo', checked : false } }
      return todos.concat(action.todo);
    case 'REMOVE' : //제거
      // { type : 'REMOVE', id : 1 }
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE' : // 토글
      // { type : 'TOGGLE', id : 1 }
      return todos.map(todo => 
        todo.id === action.id ? { ...todo, checked : !todo.checked } : todo
      )
    default :
      return todos;
  }
  
}

const App = () => {
  // const [ todos, setTodos ] = useState(createBulkTodos)
  
  // useReducer(리듀서, 초기값, 초기state를만들어주는함수)
  const [ todos, dispatch ] = useReducer(todoReducer, undefined, createBulkTodos)
  // 리듀서 사용시 상태업데이트로직을 컴포넌트 바깥에 둘 수 있다는 장점이 있다.

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      // setTodos(prev => {
      //   const todo = {
      //     id : nextId.current,
      //     text,
      //     checked : false
      //   }
      //   return prev.concat(todo);
      // })
      const todo = {
        id : nextId.current,
        text,
        checked : false
      }
      dispatch({type : 'INSERT', todo})
      nextId.current += 1;
    }
  , [])

  const onRemove = useCallback(id => {
    // setTodos(todos.filter(todo => todo.id !== id))
    // setTodos(todos => todos.filter(todo => todo.id !== id));
    dispatch({type : 'REMOVE', id})
  }, [])

  const onToggle = useCallback(id => {
    // setTodos(todos.map(todo => 
    //   todo.id === id ? { ...todo, checked: !todo.checked} : todo,
    // ))
    // setTodos(todos => {
    //   return todos.map(todo => 
    //     todo.id === id ? { ...todo, checked : !todo.checked} : todo)
    // })
    dispatch({ type : 'TOGGLE', id})
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
