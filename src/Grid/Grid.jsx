import React ,{useState} from 'react'
import Cell from './Cell'
import './Grid.css'
const Grid = ({player,setPlayer,score,setScore}) => {
    //matrix positions of the the ceels
    const positions = ["00","01","02","10","11","12","20","21","22"]
    const [isEnded,setEnded] = useState(false); //false means the game is still going on, true means game has ended
    /**
     * Checks if the a,b,c positions in the array are the same in the array
     * @param {string[]} array 
     * @param {number} a 
     * @param {number} b 
     * @param {number} c 
     * @returns {boolean} whether the array values at position a,b,c are the same
     */
    const check=(array,a,b,c)=>{
        if(array[a] && array[b] && array[c] && array[a]===array[b] && array[b]===array[c]){
            document.querySelector(`#p${positions[a]}`).style.backgroundColor = "burlywood";
            document.querySelector(`#p${positions[b]}`).style.backgroundColor = "burlywood";
            document.querySelector(`#p${positions[c]}`).style.backgroundColor = "burlywood";
            return true
            // setIsWon(true);
        }
        return false
    }
    /**
     * Checks if any palyer has won by getting the character at the positions and then check if the required positions have the same cahracter using the @function check
     * @returns {boolean} if there is a winner,otherwise 
     */
    const checkWinner=()=>{
        const xnos = positions.map((position)=>{
            return document.querySelector(`#p${position}`).innerHTML;
        })
        const isWon =  check(xnos,0,1,2) ||
            check(xnos,3,4,5) ||
            check(xnos,6,7,8) ||
            check(xnos,0,3,6) ||
            check(xnos,1,4,7) ||
            check(xnos,2,5,8) ||
            check(xnos,2,4,6) ||
            check(xnos,0,4,8) ;
        if(isWon){
            setScore({
                ...score,
                player1:player?score.player1:score.player1+1,
                player2:player?score.player2+1:score.player2,
            })
            return true;
            
        }

        const isDraw = xnos.reduce((acc,curr)=>(Boolean)(acc && curr))
        if(isDraw){
            setScore({
                ...score,
                draw:score.draw+1
            })
            return true;
            
        }
        return false;
        
        
    }
    return (
        <div className="grid">
            {
                positions.map((position)=>{
                    return <Cell key={position}  {...{checkWinner,position,player,setPlayer,isEnded,setEnded}}/>
                })
            }
        </div>
    )
}

export default Grid
