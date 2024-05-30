import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square";

import { TURNS } from "./constants";
import { checkEndGame, isWinner } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    if (isWinner(newBoard, turn)) {
      confetti()
      setWinner(turn)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

    setTurn(prevTurn=>prevTurn === TURNS.X ? TURNS.O: TURNS.X)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
