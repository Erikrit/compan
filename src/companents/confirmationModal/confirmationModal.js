import React, { useState } from "react";
import styles from './confirmationModal.module.css'
import { productsData } from "../Assets/data";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css';
import estadosCidades from '../Assets/estados-cidades.json'



const ConfirmationModal = ({ showModal, handleClose }) => {

    const handlePublish = () => {
        console.log("Anúncio publicado!");
        handleClose(); 
      };
  
  return (
    <Modal show={showModal} onHide={handleClose} container={document.body} className={styles.confirmationModal}>
    <Modal.Header closeButton>
      <Modal.Title>Confirmação</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Tem certeza que deseja publicar o anúncio?</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Não
      </Button>
      <Button  onClick={handlePublish} className={styles["btn-publicar"]}>
        Publicar
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default ConfirmationModal;