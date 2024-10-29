import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './index.css';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';

const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [{ path: '/', element: <Dashboard /> }],
	},
];
const router = (
	<BrowserRouter>
		<Routes>
			{routes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element}>
					{route.children.map((child) => (
						<Route key={child.path} path={child.path} element={child.element} />
					))}
				</Route>
			))}
		</Routes>
	</BrowserRouter>
);
const App = () => {
	return router;
};

export default App;
