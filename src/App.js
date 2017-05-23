import React, {Component} from 'react';
import uuid from 'uuid';

import MoviesList from './Components/MoviesList';
import SearchMovie from './Components/SearchMovie';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentWillMount() {
        this.setState({
            movies: [
                {
                    id: uuid.v4(),
                    title: 'World War Z',
                    year: 2013
                },
                {
                    id: uuid.v4(),
                    title: 'Salt',
                    year: 2010
                },
                {
                    id: uuid.v4(),
                    title: '50/50',
                    year: 2011
                },
                {
                    id: uuid.v4(),
                    title: 'Shrek',
                    year: 2001
                },
                {
                    id: uuid.v4(),
                    title: 'Prometheus',
                    year: 2012
                },
                {
                    id: uuid.v4(),
                    title: 'The Prestige',
                    year: 2006
                },
                {
                    id: uuid.v4(),
                    title: 'A Series of Unfortunate Events',
                    year: 2004
                },
                {
                    id: uuid.v4(),
                    title: 'Up',
                    year: 2009
                }
            ]
        })
    }

    render() {
        return (
            <div>
                <h1>Movies with React</h1><br/>
                <h3>List of Movies</h3><br/>
                <h3>Looking for a specific movie ?</h3>
                <SearchMovie /><br/>
                <MoviesList movies={this.state.movies}/>
            </div>
        );
    }
}

export default App;
