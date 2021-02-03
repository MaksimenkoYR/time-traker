import {AuthContext} from './context/AuthContex'
import {useAuth} from './hooks/useAuth'
import Routes from './features/Routes'

function App() {
    const {token, logIn, logOut, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = Routes(isAuthenticated)
    return (
        <AuthContext.Provider value={{token, logIn, logOut, userId, isAuthenticated}}>
            {routes}
        </AuthContext.Provider>
    )
}

export default App
