import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 export const ModalButton = ({modalContent, title, buttonName}) =>{
    const[showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleOpenModal = () => {
        setShowModal(true);
    }

    return(
        <div>
        <Button variant="primary" onClick={handleOpenModal}>
        {buttonName}
    </Button>

    <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <modalContent>{modalContent}</modalContent>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
        </Modal.Footer>
        
    </Modal>
    </div>
    );
};
