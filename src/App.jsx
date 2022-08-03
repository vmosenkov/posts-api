import React, {useEffect, useState}  from 'react';
import './styles/App.css';
import { AuthContext } from './context';

/* Components */
import { Navbar } from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';



function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		 if (localStorage.getItem('auth')) {
			  setIsAuth(true)
		 }
		 setLoading(false);
	}, [])

	return (
		<AuthContext.Provider value ={{
			isAuth,
			setIsAuth,
			isLoading
		}}>	
			<div>
				<header>
					<Navbar/>
				</header>
				<AppRouter/>

			</div>
		</AuthContext.Provider>
	);
}

export default App;