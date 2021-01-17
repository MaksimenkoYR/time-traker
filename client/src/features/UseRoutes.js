import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AuthPage from '../pages/AuthPage'

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return <Switch></Switch>
    } else {
        return (
            <Switch>
                <Route path='/'>
                    <AuthPage />
                </Route>
            </Switch>
        )
    }
}

export default useRoutes
