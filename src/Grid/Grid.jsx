import React ,{useState,useEffect} from 'react'
import Modal from '../Modal/Modal'
import Cell from './Cell'
import './Grid.css'
import { CheckWinner } from './winnerLogic'

const Grid = ({player,setPlayer,score,setScore}) => {
    //matrix positions of the the ceels
    const positions = ["00","01","02","10","11","12","20","21","22"]
    const [grid,setGrid]=useState(  [["","",""],
                                    ["","",""],
                                    ["","",""]]);
    
    const [isEnded,setEnded] = useState(false); //false means the game is still going on, true means game has ended
    const [modalState,setModalState] =  useState(false) // false means the modal is closed this is the modal state used to open or close the modal
    useEffect(()=>{
        const isWon= CheckWinner(grid);
        if(isWon){
            setEnded(true);
            setScore(score=>{
                return {...score,
                    player1:player?score.player1:score.player1+1,
                    player2:player?score.player2+1:score.player2
                }
            });
            
            return;
        }
        setPlayer(!player);
        
        
    },[grid])
    return (
        <>
        <div className="grid">
            {
                positions.map((position)=>{
                    return (
                        <Cell 
                            key={position}  
                            cellText={grid[parseInt(position[0])][parseInt(position[1])]}
                            {...{setGrid,position,player,setPlayer,isEnded,setEnded}}
                        />
                    )
                })
            }
        </div>
        <Modal {...{modalState,setModalState}}/>
        </>
    )
}

export default Grid
