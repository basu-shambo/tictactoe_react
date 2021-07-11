import React ,{useState} from 'react'
import Header from './Header/Header'
import PlayerSelector from './PlayerSelector/PlayerSelector'
import './App.css'
import Grid from './Grid/Grid'
const App = () => {
    const [player,setPlayer] = useState(false)
    const [score1,setScore1] = useState(0)
    const [score2,setScore2] = useState(0)
    return (
        <div className="app">
            <Header className="header"/>
            <div className="playarea">
                <PlayerSelector/>
                <Grid {...{player,setPlayer}}/>
                <PlayerSelector/>
            </div>
            
            
        </div>
    )
}

export default App
