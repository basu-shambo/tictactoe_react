import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';
const Modal = ({modalState,resetScoreAndPlayer,resetGrid}) => {
    const endgame = () =>{
        resetGrid();
        resetScoreAndPlayer();
    }
    const continueGame =()=>{
        resetGrid();
    }
    // const continuegame = (resetGrid,resetScore,)
    if(!modalState.won && !modalState.draw) return null;
    return ReactDom.createPortal(
        <div className="modal">
            <div className="portalContent">
                <div className="textConent">
                    {
                        modalState.draw?`This Match was a draw`:modalState.won?`Player${modalState.playerWon} Won`:undefined
                    }
                </div>
                <button onClick={endgame}>End game</button>
                <button onClick={continueGame}>Continue</button>
            </div>
        </div>,
        document.querySelector("#portal")
    )
}

export default Modal
