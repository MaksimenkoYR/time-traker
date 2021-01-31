import {useState, useCallback} from 'react'
import {useAuth} from './useAuth'

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {userId} = useAuth()
    const request = useCallback(
        async (url, method = 'GET', body = null, headers = {}) => {
            setLoading(true)
            try {
                if (body) {
                    body = JSON.stringify(body)
                    headers['Content-type'] = 'application/json'
                }
                headers['user-id'] = userId
                const response = await fetch(url, {method, body, headers})
                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.message)
                }
                setLoading(false)
                return data
            } catch (error) {
                setLoading(false)
                setError(error.message)
                throw error
            }
        },
        [userId]
    )

    return {loading, request, error}
}

export default useHttp
