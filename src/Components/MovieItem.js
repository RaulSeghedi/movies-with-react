import React, {Component} from 'react';
import './MovieItem.css';

class MovieItem extends Component {
    render() {
        return (
            <div className="movie">
                <div className="title">
                    {this.props.movie.title}
                </div>
                <div className="genre">
                    Genre: {this.props.movie.genre}
                </div>
                <div className="detail">
                    Year: {this.props.movie.year}
                </div>
            </div>
        );
    }
}

export default MovieItem;
