import React from 'react'

function Logo(props) {
    return(
        <div className="logo-container" dangerouslySetInnerHTML={{__html: props.logo}}>
        </div>
    )
}

export default Logo