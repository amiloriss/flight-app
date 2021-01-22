import React from 'react';
import './styles/style.scss';
import { Route, Switch, } from 'react-router-dom';
import {IndexRoute} from 'react-router'

import AuthPage from './pages/AuthPage';
import FlightPage from './pages/FlightPage';
import ProtectedRoute from './ProtectedRoute';
import { connect } from 'react-redux';

const App = ({isAuth}) => {
	return (
		<div className='app-wrapper'>
			<div className='app'>
				<Switch>
					<Route exact path='/' render={() => <AuthPage />} />
					
					<ProtectedRoute path="/home" component={FlightPage} isAuth={isAuth} />
				</Switch>
			</div>
		</div>
	);
};

const mapStateToProps = (state) =>{
	console.log(state.authReducer.isAuth);
	return {
		isAuth: state.authReducer.isAuth
	}
}

export default connect(mapStateToProps) (App);
