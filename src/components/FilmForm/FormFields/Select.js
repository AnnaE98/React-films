import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import globstyles from '../../../components/style.module.css'
import styles from './Field.module.css'

const StyledSelect = styled.div`

  select {
   
    &:focus {
      outline: none;
    }
    ${props => props.error && 'border: 2px solid crimson;'};    
  }
`;

const Select = ({ category, handleInputChange, error }) => (
  <div className={styles.selects}>
  <StyledSelect error={error}>
    <div className={globstyles.label} htmlFor="category">Категория *</div>
    <select
      id="category"
      value={category || 'Выберите категорию'}
      onChange={e => handleInputChange(e, 'category')}
    >
      <option disabled hidden>Выберите категорию</option>
      <option value="fantace">Фантастика</option>
      <option value="deaded">Ужасы</option>
      <option value="komedia">Комедия</option>
      <option value="drama">Драма</option>
      <option value="boevik">Боевик</option>
    </select>
  </StyledSelect>
  </div>
);

Select.propTypes = {
  category: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Select;
