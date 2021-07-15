import React ,{useState} from 'react'

const Cell = ({checkWinner,position,player,setPlayer}) => {
    
    const [clicked,setClicked] = useState(false)
    let ended = false;
    const handleClick=(e)=>{
        e.stopPropagation();
        const text = player?"O":"X";
        if(e.target.tagName==="P"){
            e.target.innerText = text;
            
        }
        else if(e.target.tagName==="DIV"){
            e.target.querySelector("p").innerText=text;
        }
        
        ended = checkWinner();
        if(!ended){
            setPlayer(!player)
        }
        setClicked(true)
    }
    return (
        <div  className={position} onClick={clicked||ended?undefined:handleClick}>
            <p  id={`p${position}`} onClick={clicked||ended?undefined:handleClick}></p>
        </div>
    )
}

export default Cell
