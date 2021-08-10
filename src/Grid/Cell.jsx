import React ,{useState} from 'react'

const Cell = ({checkWinner,position,player,setPlayer,isEnded,setEnded}) => {
    
    const [clicked,setClicked] = useState(false)
    const handleClick=(e)=>{
        e.stopPropagation();
        const text = player?"O":"X";
        if(e.target.tagName==="P" && !isEnded){
            e.target.innerText = text;
            
        }
        else if(e.target.tagName==="DIV" &&  !isEnded){
            e.target.querySelector("p").innerText=text;
        }
        
        const ended = isEnded?true:checkWinner();
        setEnded(ended);
        if(!ended){
            setPlayer(!player)
        }
        setClicked(true)
    }
    return (
        <div  className={position} onClick={clicked||isEnded?undefined:handleClick}>
            <p  id={`p${position}`} onClick={clicked||isEnded?undefined:handleClick}></p>
        </div>
    )
}

export default Cell
