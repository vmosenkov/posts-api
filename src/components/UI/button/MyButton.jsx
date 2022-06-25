import React from 'react';
//import classes from './MyButton.module.css';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radius);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  cursor: pointer;
`;


const MyButton = ({children, ...props}) => {
	
	return (
    	<Button {...props}>{children}</Button>
  	)
}

export default MyButton;