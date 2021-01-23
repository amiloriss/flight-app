import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    successAuth,
    failureLogin,
    failurePassword,
} from '../actions/AuthAction';

class AuthForm extends Component {

	componentDidMount(){
        // set user localstorage initial state
		this.props.successAuth(localStorage.setItem('user', ''));
	}

    state = {
        email: '',
		password: '',
		isLoginValid: this.props.isLoginValid,
		isPasswordValid: this.props.isPasswordValid,
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value } );
    };
    auth = (email, password) => {
		// check valid email and password
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!email.match(pattern)) {
			this.props.failureLogin();
        } else
        if (password.length < 8) {
            this.props.failurePassword();
		}else if(email.match(pattern) && password.length >= 8) this.props.successAuth(email);
		
    };
    render() {
        const { email, password } = this.state;
        return (
            <form className='auth-form'>
                <h2 className='auth-title'>Simple Flight Check</h2>
                <div className='auth-input-wrapper clear-fix'>
                    <div className='login-wrapper'>
                        <label style={{color: this.props.isLoginValid === false && 'red'}} htmlFor='login'>Логин</label>
                        <input
                        style={{borderColor: this.props.isLoginValid === false && 'red'}}
                            value={email}
                            name='email'
                            id='login'
                            type='email'
                            onChange={this.onChange}
                            required
                        />
						{this.props.isLoginValid === false && <span style={{color: 'red'}}>Введите корректную почту</span>}
                    </div>
                    <div className='password-wrapper'>
                        <label style={{color: this.props.isPasswordValid === false && 'red'}} htmlFor='password'>Пароль</label>
                        <input
                        style={{borderColor: this.props.isPasswordValid === false && 'red'}}
                            value={password}
                            minLength='8'
                            name='password'
                            id='password'
                            type='password'
                            onChange={this.onChange}
                            required
                        />
						{this.props.isPasswordValid === false && <span style={{color: 'red'}}>Пароль должен содержать не менее 8 символов</span>}
                    </div>
                    <Link onClick={() => this.auth(email, password)} to='/home'>
                        <div  className='btn-enter'>Войти</div>
                    </Link>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginValid: state.authReducer.isLoginValid,
		isPasswordValid: state.authReducer.isPasswordValid,
    };
};

export default connect(mapStateToProps, { successAuth, failureLogin, failurePassword })(AuthForm);
