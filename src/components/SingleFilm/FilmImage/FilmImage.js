import React from 'react';
import PropTypes from 'prop-types';

import styles from '../OneFilm.module.css'



const FilmImage = ({ name, image}) => {

  return (
    <div className={styles.oneimg}>
      <img src={image} alt={name} />
   
    </div>
  );
};

FilmImage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
 
};

export default FilmImage;
