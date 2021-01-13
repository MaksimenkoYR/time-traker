import React from 'react'
import {Switch} from 'react-router-dom'

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return <Switch></Switch>
    } else {
        return <Switch></Switch>
    }
}

export default useRoutes
