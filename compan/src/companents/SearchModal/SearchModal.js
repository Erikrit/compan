import React, { useState } from 'react';
import styles from "./SearchModal.module.css";
import { productsData } from '../Assets/data';
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchModal = ({ onClose, productsData, onSearch }) => {
    
  const [cityChecked, setCityChecked] = useState(false);
  const [stateChecked, setStateChecked] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleCityCheckboxChange = () => {
    setCityChecked(!cityChecked);
  };

  const handleStateCheckboxChange = () => {
    setStateChecked(!stateChecked);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
    filterProducts();
  };

  const filterProducts = () => {
    if (!productsData) {
      // Handle the case where productsData is undefined
      return;
    }

    const filteredProducts = productsData.filter((item) => {
      const cityMatch = cityChecked ? item.cidade.toLowerCase().includes(searchText.toLowerCase()) : true;
      const stateMatch = stateChecked ? item.estado.toLowerCase().includes(searchText.toLowerCase()) : true;

      return cityMatch && stateMatch;
    });

    onSearch(filteredProducts);
  };

  const handleSearchClick = () => {
    filterProducts();
    onClose();
  };

  return (
    <div className={styles.modal}>

      <p>Pesquisa simples</p>

      <div className={styles.checkBox}>
        <div>
        <input type="checkbox" checked={cityChecked} onChange={handleCityCheckboxChange} />
        <label htmlFor="city">Cidade</label>
      </div>
      <div>
        <input type="checkbox" checked={stateChecked} onChange={handleStateCheckboxChange} />
        <label htmlFor="state">Estado</label>
      </div>
      </div>
      <div className={styles.searchBar}>
        <input type="text" value={searchText} onChange={handleSearchInputChange} placeholder="Pesquisar..." />
        <div style={{fontSize: '20px', cursor:'pointer'}}>
          <FaMagnifyingGlass onClick={handleSearchClick}/>
        </div>
      </div>
      <div className={styles.closeModal}>
        <button onClick={onClose}>X</button>
      </div>
      
    </div>
  );
};

export default SearchModal;