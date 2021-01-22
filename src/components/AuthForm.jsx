import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    successAuth,
    failureLogin,
    failurePassword,
} from '../actions/AuthAction';

class AuthForm extends Component {

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
		// check valid email
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!email.match(pattern)) {
            console.log('nice');
			this.props.failureLogin();
        }else
        if (password.length < 8) {
            console.log('true');
            this.props.failurePassword();
		}else this.props.successAuth();
		
    };
    render() {
		
        const { email, password } = this.state;
        return (
            <form className='auth-form'>
                <h2 className='auth-title'>Simple Flight Check</h2>
                <div className='auth-input-wrapper clear-fix'>
                    <div className='login-wrapper'>
                        <label htmlFor='login'>Логин</label>
                        <input
                            value={email}
                            name='email'
                            id='login'
                            type='email'
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div className='password-wrapper'>
                        <label htmlFor='password'>Пароль</label>
                        <input
                            value={password}
                            minLength='8'
                            name='password'
                            id='password'
                            type='password'
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <Link onClick={() => this.auth(email, password)} to='/home'>
                        <a className='btn-enter'>Войти</a>
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
