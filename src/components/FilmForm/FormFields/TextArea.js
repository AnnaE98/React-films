import React from 'react';
import PropTypes from 'prop-types';

import globstyles from '../../../components/style.module.css'

import StyledTextarea from '../styled/Textarea';
import styles from './Field.module.css'

export const Textarea = ({
    name, value, handleInputChange, error, isRequired,
  }) => (
    <div className={styles.FormField}>
      <div className={globstyles.label} htmlFor={name}>Описание {isRequired && '*'}</div>
      <StyledTextarea
        id={name}
        rows={4}
        value={value}
        onChange={e => handleInputChange(e, name)}
        error={error}
      />
    </div>
  );
  
  Textarea.displayName = 'Textarea';
  
  Textarea.defaultProps = {
    error: false,
    isRequired: false,
  };
  
  Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    isRequired: PropTypes.bool,
  };