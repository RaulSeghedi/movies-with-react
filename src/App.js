import React, {Component} from 'react';
import Search from './Components/Search';

class App extends Component {
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
                    <Search />
                </div>
            </div>
        );
    }
}

export default App;
