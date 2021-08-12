import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';
const Modal = ({modalState,setModalState}) => {
    if(!modalState) return null;
    return ReactDom.createPortal(
        <div className="portal">
            Fancy Modal
        </div>,
        document.querySelector("#modal")
    )
}

export default Modal
