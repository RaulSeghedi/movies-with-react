import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return (
            <div>
                {this.props.movie.title}<br/>
                Year: {this.props.movie.year}<br/><br/>
            </div>
        );
    }
}

export default MovieItem;
