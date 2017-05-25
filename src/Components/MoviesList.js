import React, {Component} from 'react';
import MovieItem from './MovieItem';
import {movies} from '../Constants/FilmsList';

class MoviesList extends Component {
    render() {
        //console.log(movies);
        let filterMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1; // -1 = any value that it can not find
        });

        let moviesItems;
        if (movies && movies.length > 0) {
            moviesItems = filterMovies.map((movie) => {
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
