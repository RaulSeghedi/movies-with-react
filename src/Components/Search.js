import React, {Component} from 'react';
import MoviesList from './MoviesList';

class Search extends Component {
    constructor(props) {
        super(props);
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
                <MoviesList search={this.state.search}/>
            </div>
        );
    }
}

export default Search;
