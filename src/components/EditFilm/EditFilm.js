import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editFilm } from '../../actions';
import Navbar from '../Navbar/Navbar';
import FilmForm from '../FilmForm/FilmForm';
import styles from '../../components/AddFilm/Add.module.css'


export class EditFilm extends Component {
  onSubmit = film => {
    this.props.editFilm(film.id, film);
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
          <div className={styles.s}>Редактирование "{this.props.film.name}"</div>
          <FilmForm
            film={this.props.film}
            films={this.props.films}
            onSubmit={this.onSubmit}
            onCancel={this.onCancel}
          />
        </div>
      </div>
    );
  }
}

function StateToProps(state, ownProps) {
  const film = state.filter(rec => rec.slug === ownProps.match.params.slug);
  return {
    film: film[0],
    films: state,
  };
}

export default connect(StateToProps, { editFilm })(EditFilm);
