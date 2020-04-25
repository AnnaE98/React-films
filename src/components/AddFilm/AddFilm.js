import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import FilmForm from '../FilmForm/FilmForm';
import { addNewFilm } from '../../actions';
import styles from '../AddFilm/Add.module.css'



export class AddFilm extends Component {
  onSubmit = (film) => {
    this.props.addNewFilm(film);
    this.props.history.push(`/films/${film.slug}`);
  }

  onCancel = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className = {styles.s}>Добавить новый фильм</div>
          <FilmForm
            films={this.props.films}
            onSubmit={this.onSubmit}
            onCancel={this.onCancel}
          />
        </div>
      </div>
    );
  }
}

function StateToProps(state) {
  return { films: state };
}

export default connect(StateToProps, { addNewFilm })(AddFilm);
