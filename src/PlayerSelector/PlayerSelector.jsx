import React from 'react'
import './PlayerSelector.css'

const PlayerSelector = ({className,active}) => {
    const text = `Player${className==="p1"?1:2}`
    return (
        <div className={`player-indicator ${className} ${active?"active":"inactive"}`}>
            {
                [...text].map((char)=>{
                    return (<div className="selectorChar">{char}</div>)
                })
            }
        </div>
    )
}

export default PlayerSelector
