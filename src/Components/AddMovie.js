import React, {Component} from 'react';
import './AddMovie.css';
import uuid from 'uuid';

class AddMovie extends Component {
    render() {
        return (
            <form className="addMovie" onSubmit={this.addMovie.bind(this)}>
                <h3 className="header">Add a movie</h3>
                <div>
                    <input className="input" type="text" placeholder="Title ..." ref='createTitle'/>
                    <input className="input" type="text" placeholder="Genre ..." ref='createGenre'/>
                    <input className="input" type="number" placeholder="Year ..." ref='createYear'/>
                </div>
                <div>
                    <button className="submit-button">Submit</button>
                </div>
            </form>
        );
    }

    addMovie(event) {
        if (this.refs.createTitle.value === '' || this.refs.createGenre.value === '' || this.refs.createYear.value === '') {
            alert('Complete all the fields !');
        } else {
            this.setState({
                newMovie: {
                    id: uuid.v4(),
                    title: this.refs.createTitle.value,
                    genre: this.refs.createGenre.value,
                    year: this.refs.createYear.value
                }
            }, function () {
                this.props.handleAddMovie(this.state.newMovie);
            })
        }
        event.preventDefault();
        this.refs.createTitle.value = '';
        this.refs.createGenre.value = '';
        this.refs.createYear.value = '';
    }

}

export default AddMovie;
