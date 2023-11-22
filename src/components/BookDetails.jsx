import { useRef, useState } from "react";
import DeleteModal from "./DeleteModal";

const initialStyles = {
    bookNameInput: false,
    bookDetailInput: false,
    authorNameInput: false,
    publishDateInput: false,
    priceInput: false,
}

const BookDetails = ({ book, books, setBooks }) => {
    const [bookName, setBookName] = useState(book.bookName);
    const [bookDetails, setBookDetails] = useState(book.bookDetails);
    const [authorName, setAuthorName] = useState(book.authorName);
    const [publishDate, setPublishDate] = useState(book.publishDate);
    const [price, setPrice] = useState(book.price);
    const [inputs, setInputs] = useState(initialStyles);

    const deleteBox = useRef();

    const handleOpen = () => {
        deleteBox.current.open();
    }

    const handleClose = () => {
        deleteBox.current.close();
    }

    const handleDelete = () => {
        const bookSet = books.filter(item => item.id != book.id);
        setBooks(bookSet);
        localStorage.setItem('books', JSON.stringify(bookSet));
    }

    const handleClick = (element) => {
        setInputs((prevState) => {
            return {
                ...prevState,
                [element]: true
            }
        })
    }

    const handleUpdate = (element) => {
        const data = {
            bookName, bookDetails, authorName, publishDate, price,
            id: book.id
        }
        setInputs((prevState) => {
            return {
                ...prevState,
                [element]: false
            }
        })
        const temp = books.map((item) => {
            if (item.id !== book.id)
                return item;
            else
                return data;
        });
        setBooks([...temp]);
        localStorage.setItem('books', JSON.stringify([...temp]));
    }

    return (
        <div className="bookDetails">
            <button className="deleteBtn" onClick={handleOpen}>Delete</button>
            <DeleteModal ref={deleteBox} book={book} closeModal={handleClose} deleteBook={handleDelete} />
            <div>
                <span>Book Name</span>
                {!inputs.bookNameInput && <p onClick={() => handleClick('bookNameInput')}>{bookName}</p>}
                {inputs.bookNameInput && <input type="text"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    onBlur={() => handleUpdate('bookNameInput')}
                />}
            </div>
            <div>
                <span>Book Details</span>
                {!inputs.bookDetailsInput && <p onClick={() => handleClick('bookDetailsInput')}>{bookDetails}</p>}
                {inputs.bookDetailsInput && <input type="text"
                    value={bookDetails}
                    onChange={(e) => setBookDetails(e.target.value)}
                    onBlur={() => handleUpdate('bookDetailsInput')}
                />}
            </div>
            <div>
                <span>Author Name</span>
                {!inputs.authorNameInput && <p onClick={() => handleClick('authorNameInput')}>{authorName}</p>}
                {inputs.authorNameInput && <input type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    onBlur={() => handleUpdate('authorNameInput')}
                />}
            </div>
            <div>
                <span>Publish Date</span>
                {!inputs.publishDateInput && <p onClick={() => handleClick('publishDateInput')}>{publishDate}</p>}
                {inputs.publishDateInput && <input type="date"
                    value={publishDate}
                    onChange={(e) => setPublishDate(e.target.value)}
                    onBlur={() => handleUpdate('publishDateInput')}
                />}
            </div>
            <div>
                <span>Price</span>
                {!inputs.priceInput && <p onClick={() => handleClick('priceInput')}>{price}</p>}
                {inputs.priceInput && <input type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={() => handleUpdate('priceInput')}
                />}
            </div>
        </div>
    );
}

export default BookDetails;