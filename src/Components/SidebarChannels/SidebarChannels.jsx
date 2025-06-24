import React from 'react'
import { Link } from 'react-router-dom'

const SidebarChannels = ({channels}) => {

    return (
        <aside>
            <nav>
                {
                channels.map((channel) => {
                    return (
                        <React.Fragment key={channel._id} >
                            <Link 
                                
                                to={`/workspaces/${channel.workspace_id}/channels/${channel._id}`}
                            >
                                {channel.name}
                            </Link>
                            <br/>
                        </React.Fragment>
                        
                    )
                })
                }
            </nav>
        </aside>
    )
}

export default SidebarChannels