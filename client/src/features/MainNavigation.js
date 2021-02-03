import React, {useContext} from 'react'
import {Button, Form, FormControl, Navbar, Row} from 'react-bootstrap'
import {AuthContext} from '../context/AuthContex'

const MainNavigation = () => {
    const auth = useContext(AuthContext)
    return (
        <Navbar bg='light' expand='lg' className='justify-content-between'>
            <Navbar.Brand href='/'>Time Tracker</Navbar.Brand>

            <Button onClick={() => auth.logOut()} variant='outline-primary'>
                Log Out
            </Button>
        </Navbar>
    )
}

export default MainNavigation
