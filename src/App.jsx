import React ,{useState} from 'react'
import Header from './Header/Header'
import PlayerSelector from './PlayerSelector/PlayerSelector'
import './App.css'
import Grid from './Grid/Grid'

const App = () => {
    const [player,setPlayer] = useState(false) //false means player 1 and true means player2
    //this will count the score of the players
    const [score,setScore] = useState({
        player1:0,
        player2:0,
        draw:0
    });
    return (
        <div className="app">
            <Header className="header" score={score}/>
            <div className="playarea">
                <PlayerSelector className="p1" active={player?false:true}/>
                <Grid {...{player,setPlayer,score,setScore}}/>
                <PlayerSelector className="p2" active={player?true:false}/>
            </div>
            
            
        </div>
    )
}

export default App
