import useRoutes from './features/UseRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap'

function App() {
    const routes = useRoutes(true)
    return (
            {routes}
    )
}

export default App
