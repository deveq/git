import React, { useReducer,useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const createBulkTodos = () => {
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({
      id : i,
      text : `할 일 ${i}`,
      checked : false
    });
  }
  return array;
}

const todoReducer = (todos,action) => {
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
    default: 
      return todos;  
  }
}
const App = () => {
  /*
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어보기',
      checked: false,
    },
  ]);
  */
  //const [todos, setTodos] = useState(createBulkTodos);
  const [todos,dispatch] = useReducer(todoReducer,undefined,createBulkTodos);
  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      //setTodos(todos.concat(todo));
      dispatch({type:'INSERT',todo});
      nextId.current += 1; // nextId 1씩 더하기
    },
    //[todos],
    [],
  );

  const onRemove = useCallback(
    (id) => {
      //setTodos(todos.filter((todo) => todo.id !== id));
      dispatch({type:'REMOVE',id});
    },
    //[todos],
    [],
  );

  const onToggle = useCallback(
    (id) => {
      /*
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
      */
     dispatch({type:'TOGGLE',id});
    },
    [todos],
  );
  // return <div>Todo App을 만들자!</div>;
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
