import React from 'react';
//import classes from './MyButton.module.css';
import styled from 'styled-components';

const SelectContainer = styled.select`
  padding: 0.5rem;
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

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <SelectContainer
			value= {value}
			onChange= {event => onChange(event.target.value)}
		>
      <option disabled value="">{defaultValue}</option>
			{options.map(option =>
				<option key={option.value} value={option.value}>
					{option.name}
				</option>	
			)}
    </SelectContainer>
  )
}

export default MySelect;
