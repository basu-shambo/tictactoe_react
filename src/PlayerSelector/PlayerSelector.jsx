import React from 'react'
import './PlayerSelector.css'

const PlayerSelector = ({className,active}) => {
    return (
        <div className={`player-indicator ${className} ${active?"active":"inactive"}`}>
            Player {className=="p1"?"1":"2"}
        </div>
    )
}

export default PlayerSelector
