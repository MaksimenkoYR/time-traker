import React, {useContext, useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import useHttp from '../../hooks/useHttp'
import {AuthContext} from '../../context/AuthContex'
import {Modal, Button, Form, Container, Alert, Card} from 'react-bootstrap'
import AddActivity from './AddActivity'

const StartActivity = () => {
    const userId = useContext(AuthContext).userId

    const {register, handleSubmit, watch} = useForm()
    const {request} = useHttp()

    const [showAddActivityType, setShowAddActivityType] = useState(false)
    const activityTypeValue = watch('activityType', false)
    const handleClose = () => {
        setShowAddActivityType(false)
    }
    useEffect(() => {
        if (activityTypeValue === 'newActivityItem') {
            setShowAddActivityType(true)
        }
    }, [activityTypeValue])

    const [activityTypes, setActivityTypes] = useState([])
    const [startedActivity, setStartedActivity] = useState([])
    const getActivity = async () => {
        const response = await request('/activity', 'GET', null, {'user-id': userId})
        setActivityTypes(response.activityTypes)
        setStartedActivity(response.startedActivity)
    }
    useEffect(() => {
        getActivity()
    }, [])

    const StartActivity = async data => {
        data.start = new Date().getTime()
        const response = await request('/activity/start', 'POST', data, {'user-id': userId})
        getActivity()
    }

    const endActivity = async activityId => {
        const data = {}
        data.end = new Date().getTime()
        data.id = activityId
        const response = await request(`/activity/${activityId}/end`, 'POST', data, {
            'user-id': userId,
        })
        getActivity()
    }
    return (
        <>
            {startedActivity.length > 0 ? (
                <Container>
                    <h2 className='m-0'>Started activity</h2>
                    <small> press to end</small>
                    {startedActivity.map(item => (
                        <Container
                            fluid
                            className='mb-1 p-1 border border-success rounded-sm'
                            onClick={() => {
                                endActivity(item._id)
                            }}
                        >
                            {item.name}
                        </Container>
                    ))}
                </Container>
            ) : null}
            <Modal centered show={showAddActivityType} onHide={handleClose}>
                <Modal.Header closeButton className='p-0 pr-1 border-0 '></Modal.Header>

                <AddActivity handleClose={handleClose} userId={userId} />
            </Modal>

            <Container className='py-3'>
                <h2>Start new activity</h2>
                <Form onSubmit={handleSubmit(StartActivity)}>
                    <Form.Group>
                        <Form.Control
                            name='activityType'
                            as='select'
                            ref={register({
                                require: true,
                                minLength: 1,
                                validate: value => value !== 'not a option',
                            })}
                        >
                            <option hidden value='not a option'>
                                Choose activity type
                            </option>
                            {activityTypes.map(item => (
                                <option key={item._id} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                            <option value='newActivityItem'>add new...</option>
                        </Form.Control>
                    </Form.Group>

                    <Button block variant='primary' type='submit'>
                        Start
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default StartActivity
