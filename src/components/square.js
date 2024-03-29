const Square = ({ onClick, element, sqId }) => {
    return (
        <div className='square' id={sqId} onClick={onClick}>
            <h3>{element}</h3>
        </div>
    );
};

export default Square;
