import arrow from '../assets/arrow.png';

const InsertHeader = ({ clicked, showInsertDiv }) => {

    const imgAddedStyles = {
        transform: showInsertDiv ? 'rotate(90deg)' : ''
    }

    return (
        <button id='insertBookBtn' onClick={clicked}>
            <img src={arrow} style={imgAddedStyles} />
            <p>Insert Book Detail</p>
        </button>
    );
}

export default InsertHeader;