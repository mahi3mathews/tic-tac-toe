import { useEffect, useState } from "react";
import Square from "./square";
import Status from "./status";

const Game = () => {
    const [player, setPlayer] = useState("X");
    const [status, setStatus] = useState("");
    const [gameSquares, setGameSquares] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const getSquare = (squareId) => {
        return gameSquares[squareId[0]][squareId[1]];
    };

    const isGameOver = () => {
        // The winning pattern should have 3 same cols/ 3 same rows/ diagonals (00, 11, 22 / 02, 11, 20)
        let isTie = true;
        for (let i = 0; i < gameSquares.length; i++) {
            if (
                gameSquares[0][i] === player &&
                gameSquares[1][i] === player &&
                gameSquares[2][i] === player
            ) {
                return `${player}_W`;
            }
            if (
                gameSquares[i][0] === player &&
                gameSquares[i][1] === player &&
                gameSquares[i][2] === player
            ) {
                return `${player}_W`;
            }
            for (let j = 0; j < gameSquares.length; j++) {
                if (gameSquares[i][j] === "") isTie = false;
            }
        }
        if (
            gameSquares[0][0] === player &&
            gameSquares[1][1] === player &&
            gameSquares[2][2] === player
        )
            return `${player}_W`;
        if (
            gameSquares[0][2] === player &&
            gameSquares[1][1] === player &&
            gameSquares[2][0] === player
        )
            return `${player}_W`;
        return isTie ? "TIE" : "";
    };

    const handleSquareClick = (sqId) => {
        let filledSquare = getSquare(sqId) || getSquare(sqId);
        if (!filledSquare && !status) {
            setGameSquares((prevState) => {
                let newState = [...prevState];
                newState[sqId[0]][sqId[1]] = player;
                return newState;
            });
        }
    };

    useEffect(() => {
        let gameStatus = isGameOver();
        if (gameStatus) setStatus(gameStatus);
        setPlayer((prevState) => (prevState === "X" ? "O" : "X"));
        console.log(gameStatus, "GAME STATUS");
    }, [gameSquares]);

    const renderGameRows = () => {
        return [...Array(gameSquares.length)].map((_, r_id) => {
            return (
                <div className='square-row'>
                    {[...Array(gameSquares.length)].map((_, c_id) => {
                        let sqId = [r_id, c_id];
                        return (
                            <Square
                                element={gameSquares[r_id][c_id]}
                                sqId={sqId}
                                onClick={() => handleSquareClick(sqId)}
                            />
                        );
                    })}
                </div>
            );
        });
    };

    const handleReset = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setGameSquares([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setStatus("");
    };

    return (
        <div className='game'>
            <div className='status-container'>
                <Status gameOver={status} player={player} />

                <button className='reset btn' onClick={handleReset}>
                    <h4> Reset </h4>
                </button>
            </div>
            <div className='square-container'>{renderGameRows()}</div>
        </div>
    );
};

export default Game;
