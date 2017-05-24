import React, {Component} from 'react';

class MovieItem extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.movie.title}
                </div>
                <div>
                    Year: {this.props.movie.year}
                </div>
            </div>
        );
    }
}

export default MovieItem;
