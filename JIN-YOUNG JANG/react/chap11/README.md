## 느려지는 원인 분석
리액트가 리렌더링을 하는 상황
1. 자신이 전달받은 props가 변경될때
2. 자신의 state가 변경될때
3. 부모 컴포넌트가 리렌더링 될때
4. forceUpdate함수가 실행될때

11장 예시에서는
할일의 checked를 변경함으로써 App 컴포넌트의 state가 변경되었고,
App컴포넌트가 리렌더링된다.
부모가 리렌더링되었으므로 TodoList가 리렌더링 -> 그 안의 2500개의 컴포넌트도 리렌더링된다.

할일1만 체크할 경우 할일 1만 리렌더링되면 되는데, 할일 2500까지 전부 리렌더링 되는 상황이다.

## React.memo를 이용하여 컴포넌트 성능 최적화

컴포넌트의 props가 변경되지 않는다면 리렌더링 되지 않도록 설정하여  
컴포넌트의 리렌더링 성능을 향상시켜줄 수 있다.  
컴포넌트를 만들고 React.memo로 감싸주기만 하면된다.

```js
const TodoListItem = (props) => {
    return (
        //...
    )
}

export default React.memo(TodoListItem);
```

## 11.5 onToggle, onRemove 함수가 바뀌지 않게 하기

### 11.5.1 useState의 함수형 업데이트
useCallback에서 deps에 todos를 넣어줬었는데(useCallback(()=>{},[todos]))  
이 경우 todos가 변경될때마다 안쪽에 있는 함수가 새로 생성되므로,  
setState의 prev를 이용하면 deps에 todos를 넣지 않아도 새롭게 변경된 state를 사용할 수 있다.  
```js
const onIncrease = useCallback(text => {
    setList(prev => {
        const todo = {
            id : nextId.current,
            text,
            checked : false
        };
        return prev.concat(todo);
    })
})
```


### 11.5.2 useReducer 사용하기

```js
// useReducer에 사용될(첫번째 매개변수로) 리듀서 만들기
function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT' : 
            // { type : 'INSERT' , todo : { id : 1, text : 'todo', checked : false }}
            return todos.concat(action.todo);
        case 'REMOVE' :
            // { type : 'REMOVE', id : 1}
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE' :
            // { type : 'TOGGLE', id : 1}
            return todos.map(todo =>
                todo.id === action.id ? { ...todo, checked : !todo.checked} : todo
            )
        default : 
            return todos;
    }
}

const App = () => {
    // useReducer(리듀서, 초기state, 초기state가_없을때_만들어주는_함수)
    const [ todos, dispatch ] = useReducer(todoReducer, undefined, createBulkTodos);

    const onInsert = useCallback(text => {
        const todo = {
            id : nextId.current,
            text,
            checked : false
        };
        dispatch({type : 'INSERT', todo});
        nextId.current += 1;
    })

    const onRemove = useCallback(id => {
        dispatch({type : 'REMOVE', id})
    }, [])

    const onToggle = useCallback(id => {
        dispatch({type : 'TOGGLE', id})
    }, [])

}
```

dispatch({type : '액션', 그외})
그외는 자동으로 action에 들어감

## 11.6 불변성의 중요성

불변성이 지켜지지 않을 경우 내부의 값이 변경되어도 바뀐것을 감지하지 못하게되어  
React.memo에서 서로 비교하여 최적화하는것이 불가능하다.  

전개연산자(...)을 사용할 경우 얕은복사를 하므로  
객체나 배열 내부의 값은 참조값을 가지게된다.
```js
const todos = [{ id: 1, checked: true }, { id: 2, checked: true }];
const nextTodos = [...todos];

nextTodo[0].checked = false;
console.log(todos[0] === nextTodo[0]); // true, 똑같은 참조값을 가지므로

nextTodo[0] = { ...nextTodos[0], checked : false}

console.log(todos[0] === nextTodos[0]); // false, 새로운 객체를 할당하였으므로
```
단계가 깊어지면 그 단계들을 모두 새롭게 만들어주어야하므로 불편하기때문에  
immer라이브러리를 통해 간단하게 깊은복사를 할 수 있다.

## 11.7 TodoList 컴포넌트 최적화
??

## 11.8 react-virtualized를 사용한 렌더링 최적화

2500개가 처음에 만들어지는데, 실제로 화면에는 10개만 보이고, 나머지는 스크롤해야 보인다.  
보이지 않는 2490개를 미리 렌더링하는것은 비효율적이고, todos배열에 변동이 생겼을때도  
TodoList컴포넌트 내부의 map함수에서 배열의 처음부터 끝까지 컴포넌트로 변환해주는데,
react-virtualized 사용시 리스트 컴포넌트에서 스크롤 되기 전에 보이지 않는 컴포넌트를 렌더링하지 않고 크기만 차지하게끔 할 수 있다.

`yarn add react-virtualized`

최적화를 하기 위해서는 각 항목의 실제 크기를 px단위로 알아낸 후 입력하면
일부만 미리 렌더링하고, 화면에 보이지 않는 부분은 렌더링하지않아
최적화를 할 수 있다

