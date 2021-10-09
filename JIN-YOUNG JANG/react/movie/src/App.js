import React from 'react';
import PropTypes from 'prop-types';

function Food({name, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
    </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  rating : PropTypes.number
}

const foodILike = [
  {
    name : 'kimchi',
    id : 1,
    rating : 5
  }, {
    name : 'samgyeopsal',
    id : 2,
    rating : 4.5
  }, {
    name : 'bibimbap',
    id : 3,
    rating : 4.8
  }, {
    name : 'doncasu',
    id : 4,
    rating : 4.7
  }, {
    name : 'kimbap',
    id : 5,
    rating : 5
  }
];

function App() {
  console.log(foodILike)
  return (
    <div className="App">
      <h1>Hello</h1>
      {
        foodILike.map(dish => <Food name={dish.name} key={dish.id} rating={dish.rating}/>)
      }
    </div>
  );
}

export default App;
