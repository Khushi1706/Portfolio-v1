import React, { useState } from "react";
import ReactModal from "react-modal";

const Modal = (props) => {
  const { isOpen, id, description } = props;
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  if (!isOpen) {
    return null;
  } else {
    return (
      <div className="modal-card">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <div className="modal-header">
          <h4>Header</h4>
        </div>
        <div className="modal-subtitle">
          <h5>Subtitle</h5>
        </div>
        <div className="modal-description">
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default Modal;
