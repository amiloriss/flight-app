import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForm = () => {
	const userEnter = e => {
		e.preventDefault();
	};

	return (
		<form className='auth-form'>
			<h2 className='auth-title'>Simple Flight Check</h2>
			<div className='auth-input-wrapper clear-fix'>
				<div className='login-wrapper'>
					<label htmlFor='login'>Логин:</label>
					<input name='login' id='login' type='email' />
				</div>
				<div className='password-wrapper'>
					<label htmlFor='password'>Пароль</label>
					<input minLength='8' name='password' id='password' type='password' />
				</div>
				<Link to="/home">
				<a
					className='btn-enter'
				>Войти</a>
				</Link>
			</div>
		</form>
	);
};

export default AuthForm;
