import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MoviesList extends Component {
    render() {
        let moviesItems;
        if (this.props.movies) {
            moviesItems = this.props.movies.map((movie) => {
                return(
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
