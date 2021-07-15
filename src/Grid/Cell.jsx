import React ,{useState} from 'react'

const Cell = ({checkWinner,position,player,setPlayer,isWon}) => {
    
    const [clicked,setClicked] = useState(false)
    const handleClick=(e)=>{
        e.stopPropagation();
        const text = player?"O":"X";
        if(e.target.tagName==="P" && !clicked &&!isWon){
            e.target.innerText = text;
            
        }
        else if(e.target.tagName==="DIV" && !clicked && !isWon){
            e.target.querySelector("p").innerText=text;
        }
        setPlayer(!player)
        setClicked(true)
        checkWinner();
    }
    return (
        <div  className={position} onClick={handleClick}>
            <p  id={`p${position}`} onClick={handleClick}></p>
        </div>
    )
}

export default Cell
