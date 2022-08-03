import React from 'react';
// import MyInputPostSearch from './UI/input/MyInputPostSearch';
import MySelect from '../../UI/MySelect';
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

const PostFilter = ({filter, setFilter}) => {
  return (
		<div>
			{/* <MyInputPostSearch/> */}
			<hr style={{margin: '15px 0'}}/>
			<InputContainer>
   		<IoSearch />
				<Input
					value={filter.query}
					onChange={e => setFilter({...filter, query: e.target.value})}
				/>
			</InputContainer>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue='Сортировка'
				options={[
					{value: 'title', name: 'По названию'},
					{value: 'body', name: 'По описанию'},
				]}
			/>
		</div>
  )
}

export default PostFilter;