import { useState } from "react";
import InsertBookHeader from "./components/InsertBookHeader";
import InsertBook from "./components/insertBook";
import BooksList from "./components/BooksList";

const App = () => {
    const [showInsertDiv, setShowInsertDiv] = useState(false);
    const [books, setBooks] = useState([]);

    const handleHeaderClick = () => {
        setShowInsertDiv(prevState => !prevState);
    }

    const insertNewBook = (data) => {
        const bookSet = [...books, data];
        setBooks(bookSet);
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