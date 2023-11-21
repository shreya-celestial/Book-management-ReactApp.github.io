import React, { useState } from "react";
import bookArrow from '../assets/bookArrow.png';
import BookDetails from "./BookDetails";

const BooksList = ({ books, setBooks }) => {

    const [clickedBooks, setClickedBooks] = useState({});

    const styleImg = {
        transform: 'rotate(90deg)'
    }

    const handleClick = (id) => {
        if (clickedBooks[`${id}`]) {
            setClickedBooks(prevState => {
                const { ...rest } = prevState;
                delete rest[`${id}`];
                return rest;
            })
            return;
        }
        setClickedBooks(prevState => {
            return {
                ...prevState,
                [`${id}`]: true
            }
        })
    }

    return (
        <div className="booksList">
            {!books.length && <h3>No Books Available</h3>}
            {books && books.map((book) => (
                <React.Fragment key={book.id}>
                    <div onClick={() => handleClick(book.id)}>
                        {clickedBooks[book.id] && <img src={bookArrow} style={styleImg} />}
                        {!clickedBooks[book.id] && <img src={bookArrow} />}
                        <p>{book.bookName} by {book.authorName}</p>
                    </div>
                    {clickedBooks[book.id] && <BookDetails book={book} books={books} setBooks={setBooks} />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default BooksList;