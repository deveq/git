# 2.0 Creating your first React Component
```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
// 여기서 <App /> 으로 표시된 부분이 컴포넌트!
// 리액트로 구현된 부분은 항상 컴포넌트 인채로 동작한다
// 기본적으로 컴포넌트란 HTML을 반환하는 함수이다
// <App /> 이렇게 표시하는걸 jsx라고 부르고 javascript와 html사이의 저런 조합으로 표시
// jsx문법이란 리액트에서만 나오는 매우 custom하고 유일한 개념이다, 나머지는 모두 js라고함
```

```javascript
// src/Potato.js
import React from "react";
function Potato(){
    return(
        <h3>I love potato</h3>
    );
}
export default Potato
```

```javascript
// App.js
import React from 'react';
import Potato from './Potato';
function App() {
    return (
        <div>
            <h1>Hello</h1>
            <Potato />
        </div>
    )
}
export default App;

// index.js에 App.js가 사용된것 처럼
// App.js에 Potato.js를 import 해서 사용!
// 리액트는 컴포넌트를 가져와서 브라우저가 이해할 수 있는 평범한 html로 변환한다
// jsx는 자바스크립트 안의 html이다, 리액트 컴포넌트를 어떻게 만들고 사용하는지에 관한것임
```

## 주의!
모든것은 <App /> 컴포넌트 안에 속해야 한다는것을 기억하자
리액트 어플리케이션은 한번에 하나의 컴포넌트만 렌더링할수 있다고함

# 2.1 Reusable Components with JSX + Props

- 자식 컴포넌트로 정보를 보내기

```javascript
// App.js
import React from "react";
function Food({ name }) {
  return (
    <div>
      <h2>I like {name}</h2>
    </div>
  );
}

// function Food( props ) {
//   return (
//     console(props)
//     console(props.name)
//   );
// }

function App() {
  return (
    <div className="App">
        <Food name="kimchi"/>
        <Food name="ramen"/>
        <Food name="pizza"/>
        <Food name="hamburger"/>
    </div>
  );
}
export default App;
```

props는 부모컴포넌트에서 자식컴포넌트로 정보를 보내는 방식이다
props라는 하나의 객체 안에 각각의 attribute가 포함되어 전송됨

이렇게 컴포넌트 이름으로 사용(<Food/>) 외에도 속성값 사용(<Food name="good"/>)</br>
또한 jsx 문법의 일부이다.

# 2.2 Dynamic Component Generation (09:54)

- 컴포넌트 값 전달과 생성을 동적으로 하기 위해서 자바스크립트의 map 함수를 쓴다
- map 함수는 인자로 들어온 함수를 인자로 들어온 배열의 각각 원소에다 적용시키는 함수이다
- 아래 코드에서는 foodILike 배열의 각각 원소를 받아 food 컴포넌트를 리턴하도록 사용

```javascript
// App.js
import React from "react";

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg"
  },
  {
    name: "pizza",
    image:
      "https://i0.wp.com/www.discoverycooking.com/wp-content/uploads/2017/02/pizza-1.jpg?fit=2426%2C3292"
  },
  {
    name: "hamburger",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/9/2019/05/Burger-National-Hamburger-Day-FT-Blog0619.jpg",
  },
  {
    name: "pasta",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2020/03/Pasta-Carbonara-2-3-scaled.jpg",
  },

]

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} height="280" width="400"/>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
```


# 2.3 map Recap

- 각 리액트 element들은 모두 다르게 취급당할 필요가 있다 </br>
    안그럴경우 콘솔창에 에러뜸!!
- 그래서 foodILike 객체에서 id 값을 부여하고 Food 컴포넌트 선언시 key props로 </br>
    넣어준다!
- alt 는 시각장애인을 위한 설정임, Food 컴포넌트 생성시 alt 라는 이름의 props로 추가


```javascript
// App.js
import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
  },
  {
    id: 2,
    name: "pizza",
    image:
      "https://i0.wp.com/www.discoverycooking.com/wp-content/uploads/2017/02/pizza-1.jpg?fit=2426%2C3292",
  },
  {
    id: 3,
    name: "hamburger",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/9/2019/05/Burger-National-Hamburger-Day-FT-Blog0619.jpg",
  },
  {
    id: 4,
    name: "pasta",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2020/03/Pasta-Carbonara-2-3-scaled.jpg",
  },

]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} height="280" width="400"/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;

```



