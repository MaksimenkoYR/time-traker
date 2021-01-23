import {AuthContext} from './context/AuthContex'
import useRoutes from './features/UseRoutes'
import {useAuth} from './hooks/auth.hook'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap'

function App() {
    const {token, logIn, logOut, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{token, logIn, logOut, userId, isAuthenticated}}>
            {routes}
        </AuthContext.Provider>
    )
}

export default App
