import React from "react";

import "./Modal.scss";

import { RxCross2 } from "react-icons/rx";
const Modal = ({
  children,
  title = "",
  showHeader = true,
  setShowModal = () => {},
}) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        {showHeader && (
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <div className="modal-closeButton">
              <RxCross2 onClick={() => setShowModal(false)} />
            </div>
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
