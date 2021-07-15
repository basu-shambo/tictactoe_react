import React ,{useState} from 'react'
import Header from './Header/Header'
import PlayerSelector from './PlayerSelector/PlayerSelector'
import './App.css'
import Grid from './Grid/Grid'
const App = () => {
    const [player,setPlayer] = useState(false) //false means player 1 and true means player2
    const [score1,setScore1] = useState(0)
    const [score2,setScore2] = useState(0)
    return (
        <div className="app">
            <Header className="header"/>
            <div className="playarea">
                <PlayerSelector className="p1" active={player?false:true}/>
                <Grid {...{player,setPlayer}}/>
                <PlayerSelector className="p2" active={player?true:false}/>
            </div>
            
            
        </div>
    )
}

export default App
