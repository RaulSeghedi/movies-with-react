import React, {Component} from 'react';
import MovieItem from './MovieItem';

class MoviesList extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    searchMovie(event) {
        this.setState({search: event.target.value})
    }

    render() {
        let searchStyle = {
            color: 'blue'
        };

        let filterMovies = this.props.movies.filter((movie) => {
            return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; // -1 = any value that it can not find
        });

        let moviesItems;
        if (this.props.movies) {
            moviesItems = filterMovies.map((movie) => {
                return (
                    <MovieItem movie={movie} key={movie.id}/>
                )
            })
        }
        return (
            <div>
                <div>
                    <h3 style={searchStyle}>Looking for a specific movie ?</h3>
                    <input type="text"
                           placeholder="Search ..."
                           value={this.state.search}
                           onChange={this.searchMovie.bind(this)}
                    />
                </div>
                <br/>
                {moviesItems}
            </div>
        );
    }
}

export default MoviesList;
