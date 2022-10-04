import React from "react";
import "./Modal.css";

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay">
        <div className="modal-container">
          <div className="header-modal">
            <h3>Encabezado</h3>
          </div>
          <button className="button-close" onClick={onClose}>
            x
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
