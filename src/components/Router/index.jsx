import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../Layout';
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import Profil from '../Profil';
import GameDetails from '../GameDetails';
import useJwt from '../../hooks/useJwt';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = ({ element, ...rest }) => {
	const navigate = useNavigate();
	const { jwt } = useJwt();
	useEffect(() => {
		if (!jwt) {
			navigate('/login');
		}
	}, [element, jwt, rest, navigate]);
	return element;
};

const LoggedRoute = ({ element, ...rest }) => {
	const navigate = useNavigate();
	const { jwt } = useJwt();
	useEffect(() => {
		if (jwt) {
			navigate('/profile');
		}
	}, [element, jwt, rest, navigate]);
	return element;
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <LoggedRoute element={<Login />} />,
			},
			{
				path: '/register',
				element: <LoggedRoute element={<Register />} />,
			},
			{
				path: '/profile',
				element: <PrivateRoute element={<Profil />} />,
			},
			{
				path: '/games/:id',
				element: <PrivateRoute element={<GameDetails />} />,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
