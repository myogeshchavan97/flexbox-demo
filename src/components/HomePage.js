import React from 'react';
import movies from '../utils/movies';
import MovieItem from './MovieItem';

const HomePage = () => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          name={movie.name}
          birthyear={movie.birthyear}
          image={movie.image}
        />
      ))}
    </div>
  );
};

export default HomePage;
