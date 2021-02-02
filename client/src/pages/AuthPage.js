import React, {useContext} from 'react'
import {useForm} from 'react-hook-form'
import {AuthContext} from '../context/AuthContex'
import useHttp from '../hooks/useHttp'

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const {register, handleSubmit} = useForm()
    const logIn = async data => {
        try {
            const response = await request('/api/auth/login', 'POST', data)
            console.log(response)
            auth.logIn(response.token, response.userId)
        } catch (error) {}
    }
    const registration = async data => {
        try {
            const response = await request('/api/auth/registration', 'POST', data)
            console.log(response)
        } catch (error) {}
    }
    return (
        <div className='container'>
            <h1>authentication</h1>
            <form>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        Email address
                    </label>
                    <input
                        name='email'
                        type='email'
                        className='form-control'
                        id='email'
                        aria-describedby='emailHelp'
                        ref={register}
                    />
                    <div id='emailHelp' className='form-text'>
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input
                        ref={register}
                        type='password'
                        className='form-control'
                        id='password'
                        name='password'
                    />
                </div>
                <div className='mb-3 form-check'>
                    <input
                        name='rememberMe'
                        type='checkbox'
                        className='form-check-input'
                        id='rememberMe'
                        ref={register}
                    />
                    <label className='form-check-label' htmlFor='rememberMe'>
                        Check me out
                    </label>
                </div>
                <div className='row justify-content-evenly'>
                    <button
                        onClick={handleSubmit(logIn)}
                        type='submit'
                        className='btn btn-primary col-4'
                    >
                        Log In
                    </button>
                    <button
                        onClick={handleSubmit(registration)}
                        type='submit'
                        className='btn btn-outline-primary col-4'
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthPage
