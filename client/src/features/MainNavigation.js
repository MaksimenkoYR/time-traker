import React, {useContext} from 'react'
import {Button, Nav, Navbar} from 'react-bootstrap'
import {AuthContext} from '../context/AuthContex'

const MainNavigation = () => {
    const auth = useContext(AuthContext)
    return (
        <Navbar bg='light' expand='lg' className='justify-content-between'>
            <Navbar.Brand href='/'>Time Tracker</Navbar.Brand>

            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='text-primary' href='/manage/activity_types'>
                            Activity types
                        </Nav.Link>
                        <Nav.Link className='text-primary' href='/manage/activity'>
                            Manage activity
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button block onClick={() => auth.logOut()} variant='outline-primary'>
                            Log Out
                        </Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavigation
