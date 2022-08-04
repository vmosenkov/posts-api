import React, {useContext}  from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from '../router/route';
import {AuthContext} from "../context";
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext);

	if (isLoading) {
		return <Loader/>
	}

	return (
		isAuth 
			?
			<Routes>
				{privateRoutes.map(route =>
					<Route 
						path={route.path}
						element={<route.element />}
						key = {route.path} 
					/>
				)}
			</Routes>
			:
			<Routes>
				{publicRoutes.map(route =>
					<Route 
						path={route.path}
						element={<route.element />}
						key = {route.path} 
					/>
				)}
				<Route path="/*" element={<Navigate to="/login" replace />} />
			</Routes>

			/* <Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<Aboutpage />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/:id" element={<PostIdPage />} />
				<Route path="*" element={<Notfoundpage />} />
			</Routes> */
	);
}

export default AppRouter;





