import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CardTitle } from "react-bootstrap";
import { CardsArea } from "../../styles/home";
import {
  CardButton,
  CardContainer,
  CardImage,
  CheckboxLabel,
  FilterContainer,
  SearchButton,
  SearchInput,
} from "../../styles/charges-batch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from "../Products/products";
import InfiniteScroll from 'react-infinite-scroll-component';
import { productsData, responsive } from "../data";
import { useState } from "react";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

  function KitchenSinkExample( { filteredItems  } ) {
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState(productsData);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
};

  const fetchMoreData = () => {
    
    setTimeout(() => {

      if (items.length >= productsData.length) {
        setHasMore(false); 
        return;
      }

      const newItems = productsData.slice(items.length, items.length + 10);
      setItems(prevItems => [...prevItems, ...newItems]);
    }, 500);
  };

  
 /*  const product = productsData.map((item) => (
    <Products
      name={item.name}
      url={item.imgurl}
      description={item.description}
      cidade={item.cidade}
    />
  )); */

  const renderRow = (startIndex, endIndex) => {
  
    return (
      <div key={`row-${startIndex}-${endIndex}`} style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        {items.slice(startIndex, endIndex).map((item, index) => (
          <Products
            key={item.id}
            name={item.name}
            url={item.imgurl}
            description={item.description}
            cidade={item.cidade}
            estado={item.estado}
          />
        ))}
        {Array.from({ length: responsive.desktop.items - (endIndex - startIndex) }).map((_, index) => (
          <div key={`empty-${index}`} style={{ width: '100%' }}></div>
        ))}
      </div>
    );
  };

  
  return (
    <InfiniteScroll 
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4 style={{ textAlign: 'center', width: '100%' }}>Loading...</h4>}
      endMessage={<p style={{ textAlign: 'center', width: '100%' }}>Não há mais itens</p>} 
      style={{ overflow: 'hidden' }}
    >
      {Array.from({ length: Math.ceil(items.length / responsive.desktop.items) }).map((_, rowIndex) => (
        renderRow(rowIndex * responsive.desktop.items, (rowIndex + 1) * responsive.desktop.items)
      ))}
    </InfiniteScroll>
  );
}

export default KitchenSinkExample;
