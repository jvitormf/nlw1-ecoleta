import React, { useState } from "react";
import ReactModal from "react-modal";
import { FiCheckCircle } from "react-icons/fi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
};

interface Props {
  show: boolean;
}

ReactModal.setAppElement("body");

const Modal: React.FC<Props> = ({ show = false }) => {
  return (
    <div>
      <ReactModal
        isOpen={show}
        contentLabel="Minimal Modal Example"
        style={customStyles}
      >
        <div className="success-message">
          <p>
            <FiCheckCircle
              size={20}
              color="#34CB79"
              style={{ marginRight: 15 }}
            />
            Cadastro concluído!
          </p>
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
