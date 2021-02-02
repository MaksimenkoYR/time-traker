import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'

const Routes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path='/'>
                    <AuthPage />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }
}

export default Routes
