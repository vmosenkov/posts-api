import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";

import cl from './Navbar.module.css';


export const Navbar = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

	return (
		<div className="container">
			<div className={cl.wrapper}>
				<div>
					<Link className={cl.navbar__links} to="/">Главная</Link>
					<Link className={cl.navbar__links} to="/about">О сайте</Link>
					<Link className={cl.navbar__links} to="/posts">Посты</Link>
				</div>
				<div className={cl.themeSwitcher} onClick={toggleTheme}>
					{theme === 'light' ? (
						<IoMoonOutline size="14px" />
					) : (
					<IoMoon size="14px" />
					)}{' '}
					<span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
				</div>
			</div>
		</div>
	);
};