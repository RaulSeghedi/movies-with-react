import React, {Component} from 'react';
import Search from './Components/Search';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie';
//import {movies} from './Constants/FilmsList';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            filterMovies: []
        }
    }

    componentWillMount() {
        // this.setState({
        //     filterMovies: movies
        // })
        let movie = localStorage.getItem('storedMovie');
        if (movie){
            this.setState({
                // parse - takes a JSON string and converts it to a JavaScript object (opposite to stringify)
                filterMovies: JSON.parse(movie)
            })
        }
    }

    handleMovieFilter(title) {
        let test = this.state.filterMovies;
        let filterMovies = test.filter((movie) => {
            return movie.title.toLowerCase().indexOf(title.toLowerCase()) !== -1; // -1 = any value that it can not find
        });
        this.setState({filterMovies: filterMovies});
        // this.updateLocalStorage(filterMovies);
    }

    handleAddMovie(input) {
        let movie = this.state.filterMovies;
        movie.push(input);
        this.updateLocalStorage(movie);
        this.setState({filterMovies: movie});
    }

    handleDelete(id) {
        let movie = this.state.filterMovies;
        let index = movie.findIndex(x => x.id === id);
        movie.splice(index, 1);
        this.updateLocalStorage(movie);
        this.setState({filterMovies: this.state.filterMovies});
    }

    updateLocalStorage(data){
        // convert the movies array into a string
        let myList = JSON.stringify(data);
        // save it to localStorage
        localStorage.setItem('storedMovie', myList);
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
