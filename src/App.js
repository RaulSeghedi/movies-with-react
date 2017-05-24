import React, {Component} from 'react';

import FilmsList from './Constants/FilmsList';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Movies with React</h1>
                <br/>
                <h3>List of Movies</h3>
                <br/>
                <FilmsList/>
            </div>
        );
    }
}

export default App;
