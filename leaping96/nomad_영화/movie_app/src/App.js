import React from "react";
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
    rating: 1.9
  },
  {
    id: 2,
    name: "pizza",
    image:
      "https://i0.wp.com/www.discoverycooking.com/wp-content/uploads/2017/02/pizza-1.jpg?fit=2426%2C3292",
    rating: 4.8
  },
  {
    id: 3,
    name: "hamburger",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/9/2019/05/Burger-National-Hamburger-Day-FT-Blog0619.jpg",
    rating: 4.9
  },
  {
    id: 4,
    name: "pasta",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2020/03/Pasta-Carbonara-2-3-scaled.jpg",
    rating: 4.7
  },

]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} height="280" width="400"/>
      <h4>{rating}/5</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}
export default App;
