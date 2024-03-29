const Status = ({ gameOver, player }) => {
    const content = {
        X: "Next player: X",
        O: "Next player: O",
        O_W: "Winner: O",
        X_W: "Winner: X",
        TIE: "Tie",
    };
    const renderStatus = () => {
        return content[gameOver ? gameOver : player];
    };
    return <h3 className='status'>{renderStatus()}</h3>;
};

export default Status;
