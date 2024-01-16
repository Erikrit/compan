import React, { useEffect, useState } from "react";
import styles from "./Popular.module.css";
import { productsData } from "../Assets/data";
import { Item } from "../Item/Item";
import SearchModal from "../SearchModal/SearchModal";
import { FaMagnifyingGlass } from "react-icons/fa6";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = productsData.length;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /* const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 450
    ) {
      
      const newVisibleItems = Math.min(
        visibleItems + 10,
        totalItems
      );

      if (newVisibleItems <= totalItems) {
        setVisibleItems(newVisibleItems);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleItems]); */

  const fetchMoreData = () => {
    // Fetch more data (in your case, increase the number of visible items)
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };


 return (
  <div className={styles.popular}>
  <div className={styles.searchContainer}>
    <h1>Anuncios</h1>
    <div className={styles.searchIcon}>
      <FaMagnifyingGlass onClick={openModal} />
    </div>
  </div>
  <hr />
  <InfiniteScroll
    dataLength={visibleItems}
    next={fetchMoreData}
    hasMore={visibleItems < totalItems}
    loader={<h4 style={{ textAlign: 'center', width: '100%', marginTop:'40px', fontWeight:'600', fontSize:'20px' }}>Loading...</h4>}
    endMessage={<p style={{ textAlign: 'center', width: '100%', marginTop:'40px', fontWeight:'500', fontSize:'20px' }}>Não há mais itens.</p>}
    style={{ overflow: 'hidden' }}
  >
    <div className={styles.popular_item}>
      {productsData.slice(0, visibleItems).map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.imgurl}
          price={item.price}
          cidade={item.cidade}
          estado={item.estado}
        />
      ))}
    </div>
  </InfiniteScroll>
  {isModalOpen && <SearchModal onClose={closeModal} />}
</div>
  );
};

export default Popular;
