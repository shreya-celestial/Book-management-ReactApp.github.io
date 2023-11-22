import { useState } from "react";
import InsertBookHeader from "./components/InsertBookHeader";
import InsertBook from "./components/insertBook";
import BooksList from "./components/BooksList";

const localBooks = localStorage.getItem('books');

const App = () => {
    const [showInsertDiv, setShowInsertDiv] = useState(false);
    const [books, setBooks] = useState(localBooks ? JSON.parse(localBooks) : []);

    const handleHeaderClick = () => {
        setShowInsertDiv(prevState => !prevState);
    }

    const insertNewBook = (data) => {
        const bookSet = [...books, data];
        setBooks(bookSet);
        localStorage.setItem('books', JSON.stringify(bookSet));
        handleHeaderClick();
    }

    return (
        <div className="container">
            <div className="containerBorder">
                <InsertBookHeader clicked={handleHeaderClick} showInsertDiv={showInsertDiv} />
                {showInsertDiv && <InsertBook insertNewBook={insertNewBook} />}
                <div className="books">
                    <h1>Books List</h1>
                    <BooksList books={books} setBooks={setBooks} />
                </div>
            </div>
        </div>
    );
}

export default App;