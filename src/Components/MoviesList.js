import React, {Component} from 'react';
import MovieItem from './MovieItem';
import {movies} from '../Constants/FilmsList';

class MoviesList extends Component {
    render() {
        let moviesItems;
        if (movies && movies.length > 0) {
            moviesItems = this.props.filterMovies.map((movie) => {
                return (
                    <MovieItem movie={movie} key={movie.id}/>
                )
            })
        }
        return (
            <div>
                {moviesItems}
            </div>
        );
    }
}

export default MoviesList;
