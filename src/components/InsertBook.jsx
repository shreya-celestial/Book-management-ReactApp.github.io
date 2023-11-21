import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InsertBook = ({ insertNewBook }) => {
    const [bookName, setBookName] = useState('');
    const [bookDetails, setBookDetails] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            bookName, bookDetails, authorName, publishDate, price,
            id: uuidv4()
        }
        insertNewBook(data);
    }

    return (
        <div className="insertBookDiv">
            <form onSubmit={handleSubmit} id="insertNewBookForm">
                <div>
                    <label>Book Name</label>
                    <input
                        type="text"
                        required
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Book Details</label>
                    <input
                        type="text"
                        required
                        value={bookDetails}
                        onChange={(e) => setBookDetails(e.target.value)}
                    />
                </div>
                <div>
                    <label>Author Name</label>
                    <input
                        type="text"
                        required
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Publish Date</label>
                    <input
                        type="date"
                        required
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button>Create Book Item</button>
            </form>
        </div>
    );
}

export default InsertBook;