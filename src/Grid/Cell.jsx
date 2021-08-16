import React from 'react'

const Cell = ({setGrid,cellText,position,player,isEnded,winner}) => {
    const handleClick=(e)=>{
        e.stopPropagation();
        const text = player?"O":"X";
        setGrid(grid=>{
            let arr =[...grid];
            arr[parseInt(position[0])][parseInt(position[1])] = text;
            return arr;
        })
        
    }
    const active = cellText?false:true;
    return (
        <div  className={position} onClick={!active||isEnded?undefined:handleClick}>
            <p  id={`p${position}`} className={winner?"winning":"notWinning"} onClick={!active||isEnded?undefined:handleClick}>{cellText}</p>
        </div>
    )
}

export default Cell
