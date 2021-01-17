import React from 'react';
import './styles/style.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import FlightPage from './pages/FlightPage';

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Route exact path='/' render={() => <AuthPage />} />
				<Route exact path='/home' render={() => <FlightPage />} />
			</div>
		</Router>
	);
};

export default App;
