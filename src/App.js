import React, {Component} from 'react';
import Search from './Components/Search';
import MoviesList from './Components/MoviesList';
import {movies} from './Constants/FilmsList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMovies: movies
        }
    }

    handleMovieFilter(title) {
        let filterMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().indexOf(title.toLowerCase()) !== -1; // -1 = any value that it can not find
        });
        this.setState({
            filterMovies
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Movies with React</h1>
                </div>
                <div>
                    <h3>List of Movies</h3>
                </div>
                <div>
                    <Search handleMovieFilter={this.handleMovieFilter.bind(this)}/>
                    <MoviesList filterMovies={this.state.filterMovies}/>
                </div>
            </div>
        );
    }
}

export default App;
