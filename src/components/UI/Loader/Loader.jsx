import React from 'react';
import styled from 'styled-components';
import cl from './Loader.module.css'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`;

const Loader = () => {
  return (
		<Wrapper>
    	<div className={cl.ldsDualRing}></div>
		</Wrapper>
  )
}

export default Loader;