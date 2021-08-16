import React ,{useState,useEffect,useRef} from 'react'
import Modal from '../Modal/Modal'
import Cell from './Cell'
import './Grid.css'
import { CheckWinner ,CheckDraw} from './winnerLogic'

const Grid = ({player,setPlayer,setScore,resetScoreAndPlayer}) => {
    //matrix positions of the the ceels
    const positions = ["00","01","02","10","11","12","20","21","22"]
    const [grid,setGrid]=useState( [["","",""],
                                    ["","",""],
                                    ["","",""]]);
    const [winningPositions,setWinnigPositions] = useState(new Set());
    
    const [isEnded,setEnded] = useState(false); //false means the game is still going on, true means game has ended
    const [modalState,setModalState] =  useState({
                                                    draw:false,
                                                    won:false,
                                                    playerWon:undefined
                                                })
    const resetGrid=()=>{
        setGrid([["","",""],["","",""],["","",""]]);
        setEnded(false);
        setModalState({draw:false,won:false,playerWon:undefined});
        setWinnigPositions(new Set());
    }
    const mounted = useRef(); // to check if the component has mounted and use the useEffect as ComponentDidUpdate
    useEffect(()=>{
        if(!mounted.current){
            mounted.current = true;
        }
        else{
            const winners= CheckWinner(grid,setWinnigPositions);
            if(winners.size>0){
                setEnded(true);
                setScore(score=>{
                    return {...score,
                        player1:player?score.player1:score.player1+1,
                        player2:player?score.player2+1:score.player2
                    }
                });
                setModalState({...modalState,won:true,playerWon:player?2:1})
                setWinnigPositions(winners)
                return;
            }
            const isDraw = CheckDraw(grid);
            if(isDraw){
                console.log("draw")
                console.log("law")
                setEnded(true);
                setScore(score=>{
                    return({...score,draw:score.draw+1})
                });
                setModalState({...modalState,draw:true})
                return;
            }
            setPlayer(!player);
        }
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
                            winner = {winningPositions.has(position)?true:false}
                            {...{setGrid,position,player,setPlayer,isEnded,setEnded}}
                        />
                    )
                })
            }
        </div>
        <Modal {...{modalState,setModalState,resetScoreAndPlayer,resetGrid}}/>
        </>
    )
}

export default Grid
