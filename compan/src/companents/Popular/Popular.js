import React, { useState } from "react";
import styles from "./Popular.module.css";
import { productsData } from "../Assets/data";
import { Item } from "../Item/Item";
import SearchModal from "../SearchModal/SearchModal";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Popular = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  return (
    <div className={styles.popular}>
      <div className={styles.searchContainer}>
        <h1>Nossos Produtos</h1>
        <div className={styles.searchIcon}>
          <FaMagnifyingGlass onClick={openModal} />
        </div>
      </div>
      <hr />
      <div className={styles.popular_item}>
        {visibleItems > 0 ? (
          productsData
            .slice(0, visibleItems)
            .map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.imgurl}
                price={item.price}
                cidade={item.cidade}
                estado={item.estado}
              />
            ))
        ) : (
          <p>Não há mais itens.</p>
        )}
      </div>
      {visibleItems < productsData.length ? (
        <div className={styles.exibirbotao}>
          <button onClick={handleLoadMore}>Exibir Mais</button>
        </div>
      ) : (
        <p>Não há mais itens...</p>
      )}
      {isModalOpen && <SearchModal onClose={closeModal} />}
    </div>
  );
};

export default Popular;
