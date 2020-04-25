import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 2px;
  background-color: #F2F2F2;
  border: none;
  border-bottom: 2px solid #F2F2F2;
  &:focus {
    ${props => !props.error && 'border-bottom-color: dodgerblue;'};
    outline: none;
  }
  ${props => props.error && 'border: 2px solid crimson;'};

`;

Input.displayName = 'Input';

export default Input;
