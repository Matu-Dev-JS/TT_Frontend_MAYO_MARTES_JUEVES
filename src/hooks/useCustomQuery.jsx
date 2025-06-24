/* useQuery() es un hook de React Query que permite realizar consultas a la API */
/* useCustomQuery() es un hook personalizado que permite realizar consultas a la API */

import { useState } from "react"

const useCustomQuery = () => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = async (callback) => {
        try{
            setLoading(true)
            const data = await callback() //Esta es la consulta a la API
            setResponse(data)
        }
        catch(error){
            console.error('Error al hacer la request', error)
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    return {
        response,
        loading,
        error,
        sendRequest
    }
}

export default useCustomQuery