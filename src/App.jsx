import React from 'react';
import './styles/style.scss';
import { Route, Switch, } from 'react-router-dom';


import AuthPage from './pages/AuthPage';
import FlightPage from './pages/FlightPage';
import ProtectedRoute from './ProtectedRoute';
import { connect } from 'react-redux';

const App = ({user}) => {
	return (
		<div className='app-wrapper'>
			<div className='app'>
				<Switch>
					<Route exact path='/' render={() => <AuthPage />} />
					<ProtectedRoute path="/home" component={FlightPage} isAuth={user} />
				</Switch>
			</div>
		</div>
	);
};

const mapStateToProps = (state) =>{
	return {
		isAuth: state.authReducer.isAuth,
		user: state.authReducer.user
	}
}

export default connect(mapStateToProps) (App);
