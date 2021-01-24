import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContex'

const MainNavigation = () => {
    const auth = useContext(AuthContext)
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-light fixed-top'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>
                    Time-tracker
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarsExampleDefault'
                    aria-controls='navbarsExampleDefault'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
                    <ul className='navbar-nav me-auto mb-2 mb-md-0'></ul>
                    <button onClick={() => auth.logOut()} className='btn btn-outline-primary'>
                        Log Out
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default MainNavigation
