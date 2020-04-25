import React from 'react';
import PropTypes from 'prop-types';

import globstyles from '../../../components/style.module.css'
import StyledInput from '../styled/Input';
import styles from './Field.module.css'



export const Input = ({
  name, value, handleInputChange, additionalText, type = 'text', error = false, isRequired,
}) => (
  <div className={styles.FormField}>    <div className={globstyles.label} htmlFor={name}>
     Название {isRequired && '*'}</div>
    <div>
      <StyledInput
        type={type}
        min={type === 'number' ? 0 : ''}
        id={name}
        value={value}
        onChange={e => handleInputChange(e, name)}
        error={error}
        additionalText={additionalText}
      />
      {additionalText && <span>{additionalText}</span>}
    </div>
  </div>
);

Input.displayName = 'Input';

Input.defaultProps = {
  additionalText: '',
  type: 'text',
  error: false,
  isRequired: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  additionalText: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  isRequired: PropTypes.bool,
};


