import React from 'react';
import AuthForm from '../components/AuthForm';
import backgroundImage from '../images/backgroundImage.jpg';

const AuthPage = () => {
	return (
		<div className='auth-page'>
			<img src={backgroundImage} alt='background' />
			<AuthForm />
		</div>
	);
};

export default AuthPage;
