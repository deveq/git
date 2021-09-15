import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
 
// 부모에서 준 속성값인 props로
// todos라는 배열을 받아와서 내장함수 map울 통해
// TodoListItem 여러개(배열)로 변환하여 렌더링!

// map울 사용하여 컴포넌트로 변환할때는 
// key props를 전달해야됨!
// 여기선 todo는 todo통째로, key는 todo.id로!


const TodoList = ({ todos, onRemove, onToggle}) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem 
            todo={todo} 
            key={todo.id} 
            onRemove={onRemove}
            onToggle={onToggle}
        />
      ))}
    </div>
  );
};
 
export default TodoList;