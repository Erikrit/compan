import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CardTitle } from "react-bootstrap";
import { CardsArea } from "../../styles/home";
import {
  CardButton,
  CardContainer,
  CardImage,
} from "../../styles/charges-batch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from "../Products/products";
import { productsData, responsive } from "../data";

function KitchenSinkExample() {

  const product = productsData.map((item) => (
    <Products
      name={item.name}
      url={item.imgurl}
      description={item.description}
    />
  ));

  return (
    <div className="container-card">
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
}

export default KitchenSinkExample;
