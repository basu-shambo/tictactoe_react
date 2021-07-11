import React ,{useState} from 'react'
import Cell from './Cell'
import './Grid.css'
const Grid = ({player,setPlayer}) => {
    const positions = ["00","01","02","10","11","12","20","21","22"]
    const callback = (fn) =>{
        return fn
    }
    const check=(array,a,b,c)=>{
        if(array[a] && array[b] && array[c] && array[a]===array[b] && array[b]===array[c]){
            console.log(a,b,c)
            document.querySelector(`#p${positions[a]}`).style.backgroundColor = "burlywood";
            document.querySelector(`#p${positions[b]}`).style.backgroundColor = "burlywood";
            document.querySelector(`#p${positions[c]}`).style.backgroundColor = "burlywood";
        }
    }
    const checkWinner=()=>{
        const xnos = positions.map((position)=>{
            return document.querySelector(`#p${position}`).innerHTML;
        })
        check(xnos,0,1,2)
        check(xnos,3,4,5)
        check(xnos,6,7,8)
        check(xnos,0,3,6)
        check(xnos,1,4,7)
        check(xnos,2,5,8)
        check(xnos,2,4,6)
        check(xnos,0,4,8)
    }
    return (
        <div className="grid">
            {
                positions.map((position)=>{
                    return <Cell key={position}  {...{callback,checkWinner,position,player,setPlayer}}/>
                })
            }
        </div>
    )
}

export default Grid
