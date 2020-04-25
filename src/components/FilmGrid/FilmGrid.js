import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';
import FilmCard from './FilmCard/FilmCard';
import styles from './FilmCard/Block.module.css'



export const FilmGrid = ({ films }) => {
  const filmsCards = films.map(film => <FilmCard key={film.id} film={film} />);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={styles.cardgrid}>
          { filmsCards }
        </div>
      </div>
    </div>
  );
};

FilmGrid.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function StateToProps(state, ownProps) {
  const films = state.sort((a) => a.name);
  if (ownProps.category === 'all') return { films };
  return {
    films: films.filter(film => film.category === ownProps.category),
  };
}

export default connect(StateToProps)(FilmGrid);
