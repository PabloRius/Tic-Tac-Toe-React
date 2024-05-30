import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square";

import { TURNS } from "./constants";
import { checkEndGame, isWinner } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(() => {
    const fromStorage = window.localStorage.getItem('board')
    return fromStorage 
      ? JSON.parse(fromStorage)
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const fromStorage = window.localStorage.getItem('turn')
    return fromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
  }, [ turn, board ])

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    const newTurn = turn === TURNS.X ? TURNS.O: TURNS.X
    setBoard(newBoard)

    setTurn(newTurn)

    if (isWinner(newBoard, turn)) {
      confetti()
      setWinner(turn)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {
          board.map((_, index)=>{
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                { board[index] }
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{ TURNS.X }</Square>
        <Square isSelected={turn === TURNS.O}>{ TURNS.O }</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
