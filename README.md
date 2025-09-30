# ❌⭕ Tic Tac Toe Game in React

Hey! This is my take on the classic Tic Tac Toe game, built entirely with **React**. I focused on using functional components and hooks for clean, reliable state management, giving it a modern, dark-themed look.

## 🔗 Live Demo

You can try the live version of my game here:

**[tictac-bay.vercel.app](https://tictac-bay.vercel.app/)**

***

## ✨ What's Inside

### Technology
* **React:** I built the entire UI and logic using React functional components.
* **JavaScript (ES6+):** All the game logic (win checks, turns, etc.) is pure JavaScript.
* **CSS:** I used custom CSS for styling, focusing on a dark theme and a centered 3x3 board layout.
* **Create React App (CRA):** This project was set up using the standard CRA template.

### Key Features
* **State-Driven UI:** The board state, player turns, and game status are all managed using the `useState` hook. I avoided direct DOM manipulation (`innerHTML`) to keep the project clean and React-friendly.
* **Reliable Logic:** It includes accurate checking for all winning conditions (rows, columns, diagonals) and automatically detects a draw.
* **Clean Look:** It features a dark background, bright cyan accents, and clear X/O icons.

***

## 🚀 How to Run My Code

Here are the instructions to get this project running on your local machine.

### Prerequisites

You'll need **Node.js** and **npm** installed globally.

### Local Installation

1.  **Clone the Repository:**
    Get the project files onto your machine:
    ```bash
    git clone [https://github.com/ReetBashak/tictac.git](https://github.com/ReetBashak/tictac.git)
    cd tictac
    ```

2.  **Install Dependencies:**
    This command pulls down all the necessary React packages:
    ```bash
    npm install
    ```

3.  **Start the Server:**
    Run the application in development mode. It should open a tab in your browser automatically.
    ```bash
    npm start
    ```
    The game will be running at `http://localhost:3000`.

***

## 📂 Project Structure Notes

The core game logic is contained in the `src/Component/TicTacToe` folder:

* `TicTacToe.jsx`: This is the main component. I put all the state, event handling (`toggle` function), and rendering logic here.
* `TicTacToe.css`: Contains all the visual styling for the game board, boxes, and buttons.

***

## 👤 Author

**Reet Bashak**

* [My GitHub Profile](https://github.com/ReetBashak)