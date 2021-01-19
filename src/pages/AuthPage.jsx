import React from 'react';
import AuthForm from '../components/AuthForm';
import backgroundImage from '../images/backgroundImage.jpg';

const AuthPage = () => {
	return (
		<div style={{background: `url(${backgroundImage})`}} className='auth-page'>
			<div className="blur-layer">
			<AuthForm />
			</div>
		</div>
	);
};

export default AuthPage;
