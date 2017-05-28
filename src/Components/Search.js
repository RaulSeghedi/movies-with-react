import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    searchMovie(event) {
        this.setState({search: event.target.value});
        this.props.handleMovieFilter(event.target.value);
    }

    render() {
        return (
            <div className="search">
                <h3 className="header">Looking for a specific movie ?</h3>
                <input type="text"
                       placeholder="Search movies ..."
                       value={this.state.search}
                       onChange={this.searchMovie.bind(this)}
                       className="input"
                />
            </div>
        );
    }

}

export default Search;
