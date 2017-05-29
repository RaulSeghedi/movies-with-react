import React, {Component} from 'react';
import './MovieItem.css';

class MovieItem extends Component {
    render() {
        return (
            <div className="movie">
                <div className="title">
                    {this.props.movie.title}
                </div>
                <div className="details">
                    Genre: {this.props.movie.genre}
                </div>
                <div className="details">
                    Year: {this.props.movie.year}
                </div>
                <a href="#" onClick={this.deleteMovie.bind(this, this.props.movie.id)}>DELETE</a>
            </div>
        );
    }

    deleteMovie(id){
        this.props.onDelete(id);
    }
}

export default MovieItem;
