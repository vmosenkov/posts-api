import React from 'react';
import './styles/App.css';

/* Components */
import { Navbar } from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';



function App() {
	return (
		<div>
			<header>
				<Navbar/>
			</header>
			<AppRouter/>

		</div>
	);
}

export default App;