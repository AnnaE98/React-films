import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Block.module.css'


const FilmCard = ({ film }) => (
  <div className = {styles.conteiner}  key={film.slug}>
    <Link to={`/films/${film.slug}`}>
      <div className={styles.blockimg}>
        <img src={film.image} alt="" />
      </div>
    </Link>
    <div className={styles.nameimg}>
      <Link to={`/films/${film.slug}`}>
        <h3>{film.name}</h3>
      </Link>
    </div>
  </div>
);

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmCard;
