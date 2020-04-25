import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import FilmInfo from './FilmInfo/FilmInfo';
import FilmImage from './FilmImage/FilmImage';
import styles from './OneFilm.module.css'

import { deleteFilm } from '../../actions';




export class SingleFilm extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  confirmDelete = () => {
    return window.confirm(`Вы действительно хотите удалить фильм "${this.props.film.name}"?`);
  }
  deleteFilm = (id) => {
    if (this.confirmDelete()) {
      this.props.deleteFilm(id);
      this.props.history.goBack();
    }
  }
  render() {
    const { film } = this.props;
    if (film.length === 0) {
      return (
        <div>
          <Navbar />
          <div className="container">
            <div className={styles.NotFound}><h1>Not Found</h1></div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className={styles.wrap}>
            <FilmInfo film={film} deleteFilm={this.deleteFilm} />
            <FilmImage name={film.name} image={film.image} />
          </div>
        </div>
      </div>
    );
  }
};

SingleFilm.propTypes = {
  film: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

function mapStateToProps(state, ownProps) {
  const film = state.filter(rec => rec.slug === ownProps.match.params.slug);
  return { film: film[0] || [] };
}

export default connect(mapStateToProps, { deleteFilm })(SingleFilm);
