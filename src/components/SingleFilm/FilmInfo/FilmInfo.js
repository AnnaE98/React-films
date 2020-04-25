import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../OneFilm.module.css'





const FilmInfo = ({ film, deleteFilm }) => {
 
  return (
    <div className={styles.content}>
      <div className={styles.name}>
        <h1>{film.name}</h1>
        
      </div>
     
      <div className={styles.Directions}>
        <h3>Описание</h3><hr />
        <p>{film.directions}</p>
      </div>

      <hr />
      <div className={styles.Options}>
          <Link to={`/films/${film.slug}/edit`}><i className="fa fa-pencil" />Редактировать</Link>
          <span onClick={() => deleteFilm(film.id)}><i className="fa fa-times" />Удалить</span>
        </div>
    </div>
  );
};

FilmInfo.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmInfo;
