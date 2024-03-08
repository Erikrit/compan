import React, { useState } from "react";
import styles from "./allProducts.module.css";
import { productsData } from "../Assets/data";
import { Item } from "../Item/Item";
import SearchModal from "../SearchModal/SearchModal";
import { FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import InfiniteScroll from "react-infinite-scroll-component";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AllProducts = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const [filteredItems, setFilteredItems] = useState(productsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const applyFilter = ({ selectedState, selectedCity, sortBy }) => {
    let filteredData = productsData;

    if (selectedState) {
      filteredData = filteredData.filter(
        (item) => item.estado.toLowerCase() === selectedState.toLowerCase()
      );
    }

    if (selectedCity) {
      filteredData = filteredData.filter(
        (item) => item.cidade.toLowerCase() === selectedCity.toLowerCase()
      );
    }

    if (sortBy === "asc") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortBy === "desc") {
      filteredData.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(filteredData);
  };

  const fetchMoreData = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  return (
    <div className={styles.popular}>
      <div className={styles.searchContainer}>
        <div className={styles.anuncio_container}>
          <h1>Anúncios</h1>
          <hr />
          <div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Pesquisar por nome"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                className="ml-2"
                onClick={() => applyFilter({ searchText, sortBy: "name" })}
              >
                <FaArrowRight />
              </Button>
            </InputGroup>
          </div>
        </div>
        <div className={styles.searchIcon} onClick={openModal}>
            <FaMagnifyingGlass />
          </div>
      </div>
      <InfiniteScroll
        dataLength={visibleItems}
        next={fetchMoreData}
        hasMore={visibleItems < filteredItems.length}
        loader={
          <h4
            style={{
              textAlign: "center",
              width: "100%",
              marginTop: "40px",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Loading...
          </h4>
        }
        endMessage={
          <p
            style={{
              textAlign: "center",
              width: "100%",
              marginTop: "40px",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            Não há mais anúncios no momento.
          </p>
        }
        style={{ overflow: "hidden" }}
      >
        <div className={styles.popular_item}>
          {filteredItems.slice(0, visibleItems).map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.imgurl}
              description={item.description}
              price={item.price}
              cidade={item.cidade}
              estado={item.estado}
            />
          ))}
        </div>
      </InfiniteScroll>
      <SearchModal
        showModal={isModalOpen}
        handleClose={closeModal}
        onApplyFilter={applyFilter}
      />
    </div>
  );
};

export default AllProducts;
