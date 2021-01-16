import React, { useState } from 'react';

const AuthForm = () => {
	return (
		<form className='auth-form'>
			<h2 className='auth-title'>Simple Flight Check</h2>
			<div className='auth-input-wrapper clear-fix'>
				<div className='login-wrapper'>
					<label htmlFor='login'>Логин:</label>
					<input name='login' id='login' type='text' />
				</div>
				<div className='password-wrapper'>
					<label htmlFor='password'>Пароль</label>
					<input name='password' id='password' type='password' />
				</div>
				<input className='btn-enter' type='submit' value='Войти' />
			</div>
		</form>
	);
};

export default AuthForm;
