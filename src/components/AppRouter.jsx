import React from 'react';
import { Routes, Route } from "react-router-dom";

/* Page */
import Homepage from '../pages/Homepage';
import Aboutpage from '../pages/Aboutpage';
import Posts from '../pages/Posts';
import Notfoundpage from '../pages/Notfoundpage';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about" element={<Aboutpage />} />
			<Route path="/posts" element={<Posts />} />
			<Route path="*" element={<Notfoundpage />} />
		</Routes>
	);
}

export default AppRouter;