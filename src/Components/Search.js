import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <h3 className="header">Looking for a specific movie ?</h3>
                <input type="text"
                       placeholder="Search movies ..."
                       className="input"
                       onChange={this.props.searchMovie}
                />
            </div>
        );
    }

}

export default Search;
