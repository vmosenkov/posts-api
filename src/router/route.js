/* Page */
import Homepage from '../pages/Homepage';
import Aboutpage from '../pages/Aboutpage';
import Posts from '../pages/Posts';
import Notfoundpage from '../pages/Notfoundpage';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';

export const privateRoutes = [
	{path: '/', element: Homepage},
	
	{path: '/about', element: Aboutpage},
	{path: '/posts', element: Posts},
	{path: '/posts/:id', element: PostIdPage},

	{path: '*', element: Notfoundpage},
]

export const publicRoutes = [
	{path: '/Login', element: Login},
]