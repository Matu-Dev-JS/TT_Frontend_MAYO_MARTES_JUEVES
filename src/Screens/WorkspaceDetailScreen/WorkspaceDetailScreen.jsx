import React, { useEffect, useState } from 'react'
import { getChannels } from '../../services/channelService'
import { useParams } from 'react-router-dom'
import SidebarChannels from '../../Components/SidebarChannels/SidebarChannels'
import useCustomQuery from '../../hooks/useCustomQuery'



const WorkspaceDetailScreen = () => {
    /* const [channels_response, setChannelsResponse] = useState([]) */
    /* const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) */
    const {
        response: channels_response, 
        error, 
        loading, 
        sendRequest
    } = useCustomQuery()

    const {workspace_id} = useParams()

    useEffect(() => {
        sendRequest( async () => getChannels({workspace_id}))
    }, [])
    

    if(loading){
        return ( 
            <div>
                <h1>Cargando espacios de trabajo...</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Detalle del espacio de trabajo</h1>
            
            {
                !loading && channels_response && <SidebarChannels channels={channels_response.data.channels}/>
            }
            
        </div>
    )
}

export default WorkspaceDetailScreen