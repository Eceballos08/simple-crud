import React from "react";
import "./CreateCharacter.css";

const CreateCharacter = ({ children, open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-is-open">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default CreateCharacter;
