import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({isAuth: user, component: Component, ...rest}){
    return (
        <Route {...rest} render={props=>{
            console.log(user);
            if (user !== 'undefined' && user !== null && user !== undefined){
                return <Component/>
            }else {
                return <Redirect to={{pathname: '/', state: {from: props.location}}}/>
            }
        }}/>
    )
}

export default ProtectedRoute
