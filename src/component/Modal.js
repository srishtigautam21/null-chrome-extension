import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const Modal = ({ openModal, setModal }) => {
  if (!openModal) return null;
  return ReactDom.createPortal(
    <div className='modal-background' onClick={(e) => setModal(false)}>
      <div className='modal-container'>
        <div className='modal-content'>👋 Hello!!!</div>
        <button className='cross-btn' onClick={() => setModal(false)}>
          X
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
