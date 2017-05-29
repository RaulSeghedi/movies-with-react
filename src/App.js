import React, {Component} from 'react';
import Search from './Components/Search';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie';
import {movies} from './Constants/FilmsList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMovies: []
        }
    }

    componentWillMount() {
        this.setState({
            filterMovies: movies
        })
    }

    handleMovieFilter(title) {
        let filterMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().indexOf(title.toLowerCase()) !== -1; // -1 = any value that it can not find
        });
        this.setState({
            filterMovies: filterMovies
        });
    }

    handleAddMovie(input) {
        this.state.filterMovies.push(input);
        this.setState({filterMovies: this.state.filterMovies});
    }

    handleDelete(id) {
        let movie = this.state.filterMovies;
        let index = movie.findIndex(x => x.id === id);
        movie.splice(index, 1);
        this.setState({filterMovies: this.state.filterMovies});
    }

    render() {
        return (
            <div>
                <div className="headers">
                    <div>
                        <h3>Movies with React</h3>
                    </div>
                    <div>
                        <h3>List of Movies</h3>
                    </div>
                </div>
                <div className="main">
                    <div>
                        <Search handleMovieFilter={this.handleMovieFilter.bind(this)}/>
                        <MoviesList filterMovies={this.state.filterMovies} handleDelete={this.handleDelete.bind(this)}/>
                    </div>
                    <div>
                        <AddMovie handleAddMovie={this.handleAddMovie.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
