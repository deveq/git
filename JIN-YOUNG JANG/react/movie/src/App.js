import React from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css'

const ENDPOINT = "https://yts-proxy.now.sh";
const LIST = "list_movies.json";
const DETAIL = "movie_details.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    // 영화데이터 로딩
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(`${ENDPOINT}/${LIST}?sort_by=rating`);
      this.setState({ movies, isLoading: false });
    } catch (error) {
      console.log("App.js getMovies 에러발생", error);
    }
  };

  render() {
    const { isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {this.state.movies.map((movie) => {
              return (
                <Movie
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  key={movie.id}
                  rating={movie.rating}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
