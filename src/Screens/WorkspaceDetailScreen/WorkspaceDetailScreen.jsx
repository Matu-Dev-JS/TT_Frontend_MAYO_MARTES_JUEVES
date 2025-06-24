import React, { useEffect, useState } from 'react'
import { getChannels } from '../../services/channelService'
import { Navigate, useParams } from 'react-router-dom'
import SidebarChannels from '../../Components/SidebarChannels/SidebarChannels'
import useCustomQuery from '../../hooks/useCustomQuery'
import Chat from '../../Components/Chat/Chat'



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

    const {workspace_id, channel_id} = useParams()

    

    useEffect(() => {
        sendRequest( async () => getChannels({workspace_id}))
    }, [])
    
    /* Si no estoy cargando y tengo canales */
    if(!loading && channels_response){
        if(!channel_id && channels_response.data.channels.length > 0){
            /* Lo redirijo al primer canal */
            return <Navigate to={`/workspaces/${workspace_id}/channels/${channels_response.data.channels[0]._id}`}/>
        }
    }

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
            {
                channel_id 
                && !loading 
                && channels_response 
                && channels_response.data.channels.length > 0 
                && <Chat/>
            }
        </div>
    )
}

export default WorkspaceDetailScreen

/* MERN STACK = Mongo / MySQL, Express, React, Node. Next, typescript, (ts con react), testing, algun proyectito con API OpenIA*/
/* .NET C# */
/* JAVA SpringBoot */
/* NODE ESTA MUERTO, AHORA HAY QUE USAR BUN.js */