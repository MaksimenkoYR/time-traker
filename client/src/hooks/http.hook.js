import {useState, useCallback} from 'react'

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const response = await fetch(url, {method, body, headers})

            const data = response

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
    }, [])

    return {loading, request, error}
}

export default useHttp