import React from 'react';
import movies from '../utils/movies';
import ListItem from './ListItem';

const ListPage = () => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <ListItem
          key={movie.id}
          name={movie.name}
          birthyear={movie.birthyear}
          image={movie.image}
        />
      ))}
    </div>
  );
};

export default ListPage;
