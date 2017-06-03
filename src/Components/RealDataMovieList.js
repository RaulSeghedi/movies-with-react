import React, {Component} from 'react';
import './RealDataMovieList.css';

const REQUEST_URL = `https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json`;

class RealDataMovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
        };
    }

    componentDidMount() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies
                });
            })
    }

    renderLoadingView() {
        return (
            <h3>Loading movies...</h3>
        )
    }

    renderMovie(movie) {
        return (
            <div className="real-data-movie">
                <div>
                    <img src={movie.posters.thumbnail} alt="" width="55" height='75'/>
                </div>
                <div>
                    <div>
                        {movie.title}
                    </div>
                    <div className="real-data-details">
                        Year: {movie.year}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }

        let movie;
        if (this.state.movies && this.state.movies.length > 0) {
            movie = this.state.movies.map((movie) => {
                return <div key={movie.id}>{this.renderMovie(movie)}</div>
            });
        }
        return (
            <div>
                {movie}
            </div>
        );
    }
}

export default RealDataMovieList;
