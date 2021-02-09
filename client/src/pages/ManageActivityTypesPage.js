import React, {useContext, useEffect, useState} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import {AuthContext} from '../context/AuthContex'
import AddActivity from '../features/Activity/AddActivity'
import useHttp from '../hooks/useHttp'
import MainTemplate from './templates/MainPageTemplate'

const ManageActivityTypesPage = () => {
    const userId = useContext(AuthContext).userId
    const {request} = useHttp()
    const getActivity = async () => {
        const response = await request('/activity', 'GET', null, {'user-id': userId})
        console.log(response)
        setActivityTypes(response.activityTypes)
    }
    const [activityTypes, setActivityTypes] = useState([])

    useEffect(() => {
        getActivity()
    }, [])

    const deleteActivityType = async id => {
        const response = await request(
            `/manage/activity_types/${id}`,
            'DELETE',
            {id: id},
            {'user-id': userId}
        )
        getActivity()
    }
    return (
        <MainTemplate>
            <AddActivity userId={userId} />
            <Container className='pt-3'>
                {activityTypes.map(item => (
                    <Row
                        key={item._id}
                        className=' justify-content-end border border-success rounded-sm p-2'
                        noGutters
                    >
                        <Col>{item.name}</Col>
                        <Col xs={3} className='d-flex justify-content-end'>
                            <Button variant='outline-primary' size='sm' className='p-1 border-0 '>
                                Edit
                            </Button>
                            <Button
                                variant='outline-danger'
                                size='sm'
                                className='p-1 border-0'
                                onClick={() => {
                                    deleteActivityType(item._id)
                                }}
                            >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                ))}
            </Container>
        </MainTemplate>
    )
}

export default ManageActivityTypesPage
