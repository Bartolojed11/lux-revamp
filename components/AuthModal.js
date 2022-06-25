import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AuthModal({modalContent, header = 'Welcome', subHeader = 'Lorem ipsum dolor !'}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // This will prevent the hydration failed
  useEffect(() => setShow(true), [])
  
  return (
    <>
      <Modal show={show} onHide={handleClose} className="login-modal">
        <Modal.Header>
          <Modal.Title>{header}</Modal.Title>
          <p>{subHeader}</p>
        </Modal.Header>
        <Modal.Body>
            {modalContent}
        </Modal.Body>
      </Modal>
    </>
  );
}
