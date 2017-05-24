import React, {Component} from 'react';
import uuid from 'uuid';
import MoviesList from '../Components/MoviesList';

const movies = [
    {
        id: uuid.v4(),
        title: 'World War Z',
        year: 2013
    },
    {
        id: uuid.v4(),
        title: 'Salt',
        year: 2010
    },
    {
        id: uuid.v4(),
        title: '50/50',
        year: 2011
    },
    {
        id: uuid.v4(),
        title: 'Shrek',
        year: 2001
    },
    {
        id: uuid.v4(),
        title: 'Prometheus',
        year: 2012
    },
    {
        id: uuid.v4(),
        title: 'The Prestige',
        year: 2006
    },
    {
        id: uuid.v4(),
        title: 'A Series of Unfortunate Events',
        year: 2004
    },
    {
        id: uuid.v4(),
        title: 'Up',
        year: 2009
    }
];

class FilmsList extends Component {
    render() {
        return (
            <div>
                <MoviesList movies={movies}/>
            </div>
        );
    }
}

export default FilmsList;
