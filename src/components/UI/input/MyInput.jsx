import React, { useState } from 'react'
//import classes from './MyInput.module.css';
import styled from 'styled-components'

const InputContainer = styled.label`
 background-color: var(--color-ui-base);
 padding: 1rem 2rem;
 display: flex;
 align-items: center;
 border-radius: var(--radius);
 box-shadow: var(--shadow);
 width: 100%;
 margin-bottom: 1.5rem;

  @media (min-width: 767px) {
   margin-bottom: 0rem;
   width: 300px;

  @media (max-width: 767px) {
   margin-bottom: 1.5rem;
   width: 300px;
 }
`;


const InputPostName = styled.input.attrs({
 	type: 'text',
 	placeholder: 'Название поста'
})`
 	margin-left: 2rem;
 	border: none;
 	outline: none;
 	background-color: var(--color-ui-base);
 	color: var(--color-text);
`;
const InputPostDesc = styled.input.attrs({
	type: 'text',
	placeholder: 'Описание поста'
})`
	margin-left: 2rem;
	border: none;
	outline: none;
	background-color: var(--color-ui-base);
	color: var(--color-text);
`;



const MyInput = (props) => {
	
  	return (
		
		<InputContainer>
    		<InputPostName {...props}/>
    		<InputPostDesc {...props}/>
		</InputContainer>
  	)
}

export default MyInput;