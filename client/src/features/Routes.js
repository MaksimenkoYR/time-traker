import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import ManageActivityPage from '../pages/ManageActivityPage'
import ManageActivityTypesPage from '../pages/ManageActivityTypesPage'

const Routes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/manage/activity_types'>
                    <ManageActivityTypesPage />
                </Route>
                <Route path='/manage/activity'>
                    <ManageActivityPage />
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
