import React, { useState } from "react";
import styles from "./SearchModal.module.css";
import { productsData } from "../Assets/data";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css';
import estadosCidades from '../Assets/estados-cidades.json'


const categorias = {
  Eletronicos: ['Celular', 'Computador', 'Notebook', 'Headset'],
  Roupas: ['Camiseta', 'Calça', 'Sapato'],
  Automoveis: ['Carro', 'Moto', 'Caminhao'],
  Acompanhantes: ['Homen', 'Mulher', 'Trans'],
  Casas: ['Apartamento', 'Casa', 'Terreno'],
};

const SearchModal = ({ showModal, handleClose, onApplyFilter }) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  

  const handleApplyFilter = () => {
    const filters = {
      selectedState,
      selectedCity,
      sortBy,
      selectedCategory,
      selectedSubcategory,
    };


    console.log(filters);
    onApplyFilter(filters);


    handleClose();
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity('');
  };

  return (
    <Modal show={showModal} onHide={handleClose} container={document.body} className={`animate__animated ${showModal ? 'animate__slideInLeft' : 'animate__slideOutLeft'}`}>
    <Modal.Header closeButton>
      <Modal.Title>Filtros</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Group controlId="formCategory">
          <Form.Label>Selecione a Categoria</Form.Label>
          <Form.Control
            as="select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Selecione...</option>
            {Object.keys(categorias).map((categoria) => (
              <option key={categoria} value={categoria}>{categoria}</option>
            ))}
          </Form.Control>
        </Form.Group>

        {selectedCategory && (
          <Form.Group controlId="formSubcategory">
            <Form.Label>Selecione a Subcategoria</Form.Label>
            <Form.Control
              as="select"
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
            >
              <option value="">Selecione...</option>
              {categorias[selectedCategory].map((subcategoria) => (
                <option key={subcategoria} value={subcategoria}>{subcategoria}</option>
              ))}
            </Form.Control>
          </Form.Group>
        )}
       <Form>
          <Form.Group controlId="formState">
            <Form.Label>Selecione o Estado</Form.Label>
            <Form.Control
              as="select"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="">Selecione...</option>
              {estadosCidades.estados.map((estado) => (
                <option key={estado.sigla} value={estado.nome}>{estado.nome}</option>
              ))}
            </Form.Control>
          </Form.Group>

          {selectedState && (
            <Form.Group controlId="formCity">
              <Form.Label>Selecione a Cidade</Form.Label>
              <Form.Control
                as="select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Selecione...</option>
                {estadosCidades.estados.find((estado) => estado.nome === selectedState)?.cidades.map((cidade) => (
                  <option key={cidade} value={cidade}>{cidade}</option>
                ))}
              </Form.Control>
            </Form.Group>
          )}

        <Form.Group controlId="formSortBy">
          <Form.Label>Ordenar por Preço</Form.Label>
          <Form.Control
            as="select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="asc">Menor para Maior</option>
            <option value="desc">Maior para Menor</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Fechar</Button>
      <Button variant="primary" onClick={handleApplyFilter}>Aplicar Filtros</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default SearchModal;