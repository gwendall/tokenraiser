import styled from 'styled-components';

export const buttonHeight = 40;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0;
  background-color: #9b59b6;
  padding: 5px 12px 8px 12px;
  border: rgba(0, 0, 0, 0.3) solid 3px;
  cursor: pointer;
  height: ${buttonHeight}px;
  transition: all 200ms ease;
  &:hover {
    border: rgba(255, 255, 255, 0.2) solid 3px;
  }
`;

export default Button;