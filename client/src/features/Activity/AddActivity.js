import React, {useState} from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import useHttp from '../../hooks/useHttp'
import SuccessfulRequestNotification from '../SuccessfulRequestNotification'
const AddActivity = ({userId, ...props}) => {
    const {request, error} = useHttp()
    const {register, handleSubmit} = useForm()
    const [showActivityAdded, setShowActivityAdded] = useState(false)
    const addActivityTypes = async data => {
        try {
            const response = await request('/activity/types', 'POST', data, {'user-id': userId})
            console.log(response)
            if (!error) {
                setShowActivityAdded(true)
                props.handleClose()
            }
        } catch (e) {
            console.log(e)
            throw e
        }
    }
    return (
        <Container className='px-2 pb-2'>
            <SuccessfulRequestNotification
                show={showActivityAdded}
                setShow={setShowActivityAdded}
            />

            <Form onSubmit={handleSubmit(addActivityTypes)}>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>add new activity </Form.Label>
                    <Form.Control
                        ref={register}
                        name='newActivityType'
                        placeholder='activity name '
                    />
                </Form.Group>

                <Button block variant='primary' type='submit'>
                    Add
                </Button>
            </Form>
        </Container>
    )
}

export default AddActivity
