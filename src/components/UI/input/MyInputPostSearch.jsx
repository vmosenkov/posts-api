import React, { useState } from 'react';
//import classes from './MyInput.module.css';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
 background-color: var(--color-ui-base);
 padding: 1rem 2rem;
 display: flex;
 align-items: center;
 border-radius: var(--radius);
 box-shadow: var(--shadow);
 width: 100%;
 margin-bottom: 1.5rem;
`;

const Input = styled.input.attrs({
 type: 'search',
 placeholder: 'Поиск...'
})`
 margin-left: 2rem;
 border: none;
 outline: none;
 background-color: var(--color-ui-base);
 color: var(--color-text);
 width: 100%;
`;

/* const MyInputPostSearch = () => {

  const [searchQuery, setSearchQuery] = useState('')
	
  return (
    <InputContainer>
     <IoSearch />
     <Input 
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)} />
    </InputContainer>
	)
}

export default MyInputPostSearch; */
