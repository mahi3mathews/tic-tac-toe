import "./App.css";

import Game from "./components/game";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <h2>Tic-Tac-Toe</h2>
            </header>
            <div className='content'>
                <Game />
            </div>
        </div>
    );
}

export default App;
