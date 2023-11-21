import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const DeleteModal = forwardRef(function DeleteModal({ book, closeModal, deleteBook }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal((
        <dialog ref={dialog} className="modal">
            <p>You will delete the below book:</p>
            <h3>{book.bookName}</h3>
            <form method="dialog">
                <button onClick={() => deleteBook()}>Ok</button>
            </form>
        </dialog>
    ), document.getElementById('modal'));
})

export default DeleteModal;