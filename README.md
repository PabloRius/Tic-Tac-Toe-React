# Tic Tac Toe Game 🎮

A simple yet fun implementation of the classic Tic Tac Toe game using **React.js**. This project showcases the power of React's state management and reusable components while delivering an interactive and engaging user experience.

## 🛠 Features

- **Play Tic Tac Toe**: Two players take turns playing as ❌ and ⚪.
- **State Persistence**: Game state (board and turn) is saved in `localStorage`, so you can resume the game even after refreshing the page.
- **Winner Detection**: Automatically detects and announces the winner or a draw.
- **Confetti Celebration**: Celebrate your win with a burst of confetti!
- **Reset Game**: Restart the game at any time.

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

   1. Clone the repository:
   ```bash
   git clone https://github.com/PabloRius/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```
   2. Install dependencies:
   ```bash
   npm install
   ```
   3. Start the development server:
   ```bash
   npm run dev
   ```
   4. Open the app in your browser:

   ```bash
   http://localhost:5173
   ```

## 🕹️ How to Play
  1. Open the app in your [browser](http://localhost:5173).
  2. Click on a square to make a move.
  3. The game alternates turns between ❌ and ⚪.
  4. A winner is declared when three of the same symbols align horizontally, vertically, or diagonally. If all squares are filled without a winner, it's a draw.
  5. Use the Reset Game button to start a new game.

## 📂 Project Structure

src/
├── components/ 
│   ├── Square.jsx          # Square component for rendering board cells
│   ├── WinnerModal.jsx     # Modal component for displaying winner/draw message
├── logic/
│   ├── board.js            # Game logic for winner detection and endgame checks
├── constants.js            # Constants like turns and winning combinations
├── App.jsx                 # Main game component
├── main.jsx                # React entry point
├── index.css               # Global styles

Built With
[React.js](https://react.dev/) - JavaScript library for building user interfaces
[Vite](https://vite.dev/) - Fast build tool and development server
[canvas-confetti](https://github.com/catdad/canvas-confetti) - Library for rendering confetti effects

## 🎨 Styling
The game is styled using CSS, with responsiveness and a dark theme for a modern look. Check out src/index.css for custom styles.

## 🤝 Contributing
Contributions are welcome! Please follow these steps:

  1. Fork the repository.
  2. Create a feature branch:
  ```bash
  git checkout -b feature-name
  ```
  3. Commit your changes:
  ```bash
  git commit -m "Add some feature"
  ```
  4. Push to the branch:
  ````bash
  git push origin feature-name
  ```
  5. Create a Pull Request.

## 🔑 License

[MIT](LICENSE.txt) - Created By [**Pablo García Rius**](https://pablo-garcia-rius.vercel.app/).
