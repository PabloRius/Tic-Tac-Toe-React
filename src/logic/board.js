import { winningCombinations } from "../constants"

export const isWinner = (board, player) => {
    return winningCombinations.some(comb =>
      comb.every(index => board[index] == player)
    )
}

export const checkEndGame = (board) => {
  return board.every((square) => square !== null)
}