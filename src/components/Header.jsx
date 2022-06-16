import styled from 'styled-components';
import { useState, useEffect } from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from './Container';

const HeaderEl = styled.header`
box-shadow: var(--shadow);
background-color: var(--color-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
`;

/* const Title = styled(Link).attrs({
  to: '/countries-flags/',
})`
  color: var(--color-text);
  font-size: var(--fw-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`; */

const ThemeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fw-sm);
  // font-weight: var(--fw-bold)
  text-transform: capitalize;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          {/* <Title>Where is the world?</Title> */}
          <ThemeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};