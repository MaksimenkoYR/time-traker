import 'bootstrap/dist/css/bootstrap.css'
import useRoutes from './features/UseRoutes'

function App() {
    const routes = useRoutes(false)
    return (
        <div className='container'>
            <h1>head</h1>
            {routes}
        </div>
    )
}

export default App
