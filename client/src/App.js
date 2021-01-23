import {AuthContext} from './context/AuthContex'
import {useAuth} from './hooks/auth.hook'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap'
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
