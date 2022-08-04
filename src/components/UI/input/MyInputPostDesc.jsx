import React from 'react';
//import classes from './MyInput.module.css';
import styled from 'styled-components';
import { MdSubtitles } from 'react-icons/md'

const InputContainer = styled.label`
	background-color: var(--color-ui-base);
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	border-radius: var(--radius);
	box-shadow: var(--shadow);
	width: 100%;
	margin-bottom: 1.5rem;

/*   @media (min-width: 767px) {
   margin-bottom: 0rem;
   width: 300px;

  @media (max-width: 767px) {
   margin-bottom: 1.5rem;
   width: 300px; */
 }
`;

const InputPostDesc = styled.input.attrs({
	type: 'text',
	placeholder: 'Описание поста'
})`
	width: 100%; //размер поля текста
	margin-left: 2rem;
	border: none;
	outline: none;
	background-color: var(--color-ui-base);
	color: var(--color-text);
`;



const MyInputPostDesc = (props) => {
	
  	return (
		
		<InputContainer>
		<MdSubtitles/>
    		<InputPostDesc {...props}/>
		</InputContainer>
  	)
}

export default MyInputPostDesc;