import React, { Component } from 'react';

class SearchMovie extends Component {

    render() {
        return (
            <form>
                <div>
                    <input type="text"
                           placeholder="Search ..."
                    />
                </div>
            </form>
        );
    }
}

export default SearchMovie;
