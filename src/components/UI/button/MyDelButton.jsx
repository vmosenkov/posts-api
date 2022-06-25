import React from 'react';
//import classes from './MyButton.module.css';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md'

const ButtonContainer = styled.div`
	background-color: var(--color-ui-base);
	padding: 5px;
	display: flex;
	align-items: center;
  justify-content: center; 
  border: none;
	border-radius: var(--radius);
	box-shadow: var(--shadow);
  cursor: pointer;

  @media (min-width: 767px) {
    display: flex; 
    align-items: right;
    justify-content: center;
    cursor: auto;
`;

const Button = styled.button`
  padding: 0 10px;
  background-color: var(--color-ui-base);
  line-height: 2.5;
  border-radius: var(--radius);
  border: none;
  display: flex;
  align-items: center;
  color: var(--color-text);
  cursor: pointer;
`;

const MyButton = ({children, ...props}) => {
	
	return (
    <ButtonContainer>
    	<Button {...props}> {children} </Button>
      <div style={{paddingRight: 10}}>
        <MdDelete/>
      </div>
    </ButtonContainer>
  	)
}

export default MyButton;