import React, {Component} from 'react';
import './RealDataMovieList.css';
import 'isomorphic-fetch';
import 'whatwg-fetch';
import 'es6-promise';

const REQUEST_URL = `https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json`;

class RealDataMovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // movies: null,
            requestFailed: false
        };
    }

    componentDidMount() {
        fetch(REQUEST_URL)
            .then(response => {
                if (!response.ok) {
                    throw Error('Request failed !');
                }
                return response;
            })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies
                });
            }, () => {
            this.setState({
                requestFailed: true
            })
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
                    <img src='https://pablopi.files.wordpress.com/2012/02/imdb-iphone.png'
                         alt="" width="100" height='75'/>
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
        if (this.state.requestFailed) return <p>Failed</p>;
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
