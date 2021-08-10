import React from 'react'
import './Header.css'
const Header = ({score}) => {
    return (
        <div className="header">
        <div className="p1Score score"><p>{score.player1}</p></div>
        <div className="heading">
            Tic Tac Toe
        </div>
        <div className="p2Score score"><p>{score.player2}</p></div>
        </div>
    )
}

export default Header
