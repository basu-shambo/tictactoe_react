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
    if(!modalState.won && !modalState.draw) return null;
    return ReactDom.createPortal(
        <div className="modal">
            <div className="portalContent">
                <div className="textContent">
                    {
                        modalState.draw?`Match Drawn`:modalState.won?`Player ${modalState.playerWon} Won`:undefined
                    }
                </div>
                <button id="end" onClick={endgame}>End game</button>
                <button id="continue" onClick={continueGame}>Continue</button>
            </div>
        </div>,
        document.querySelector("#portal")
    )
}

export default Modal
