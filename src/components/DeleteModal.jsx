import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import cross from '../assets/cross.png';

const stylesDelete = {
    backgroundColor: 'red'
}

const DeleteModal = forwardRef(function DeleteModal({ book, closeModal, deleteBook }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        const handles = {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            }
        }
        return handles;
    });

    window.addEventListener('click', (e) => {
        if (e.target === dialog.current) {
            closeModal();
        }
    })

    return createPortal((
        <dialog ref={dialog} className="modal">
            <img src={cross} onClick={() => closeModal()} />
            <form method="dialog">
                <p>Do you want to delete the below book?</p>
                <h3>{book.bookName}</h3>
                <button onClick={() => closeModal()}>Cancel</button>
                <button onClick={() => deleteBook()} style={stylesDelete}>Delete</button>
            </form>
        </dialog>
    ), document.getElementById('modal'));
})

export default DeleteModal;