import 'bootstrap/dist/css/bootstrap.css'
import useRoutes from './features/UseRoutes'

function App() {
    const routes = useRoutes(false)
    return <div className='container'>{routes}</div>
}

export default App
