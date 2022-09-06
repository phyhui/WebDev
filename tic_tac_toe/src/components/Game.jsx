import React from 'react'
import {useState, useEffect} from 'react'

import '../index.css'


export function Tic_Tac_Toe(){

    const [board, setBoard] = useState([
        [""],[""],[""],
        [""],[""],[""],
        [""],[""],[""]
    ]);

    function playerTurn(index0, index1){
        board[index0][index1] = "X";
        setBoard(()=> [...board]);
    }

    return(
        <div className='__container'>
            <span onClick={() => {playerTurn(0,0)}} className='__squares'>{board[0][0]}</span>
            <span onClick={() => {playerTurn(0,1)}} className='__squares'>{board[0][1]}</span>
            <span onClick={() => {playerTurn(0,2)}} className='__squares'>{board[0][2]}</span>
            <span onClick={() => {playerTurn(1,0)}} className='__squares'>{board[1][0]}</span>
            <span onClick={() => {playerTurn(1,1)}} className='__squares'>{board[1][1]}</span>
            <span onClick={() => {playerTurn(1,2)}} className='__squares'>{board[1][2]}</span>
            <span onClick={() => {playerTurn(2,0)}} className='__squares'>{board[2][0]}</span>
            <span onClick={() => {playerTurn(2,1)}} className='__squares'>{board[2][1]}</span>
            <span onClick={() => {playerTurn(2,2)}} className='__squares'>{board[2][2]}</span>
        </div>
    )
    
}


export default Tic_Tac_Toe