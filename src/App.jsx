import React from 'react';
import './styles/style.scss';
import { Route, Switch } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import FlightPage from './pages/FlightPage';

const App = () => {
	return (
		<div className='app-wrapper'>
			<div className='app'>
				<Switch>
					<Route exact path='/' render={() => <AuthPage />} />
					<Route exact path='/home' render={() => <FlightPage />} />
				</Switch>
			</div>
		</div>
	);
};

export default App;
