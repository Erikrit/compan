import React from "react";
import styles from "./Item.module.css";
import { CardButton } from "../../../styles/charges-batch";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className={styles.item}>
      <Link to={`/products/${props.id}`}>
        <img className={styles.itemImage} src={props.image} alt="" />
      </Link>
      <div className={styles.itemDescription}>
        <div className={styles.itemNames}>
          <p className={styles.itemName}>{props.name}</p>
        </div>
        <div className={styles.descriptionPriceBox}>
          <div className={styles.descriptionBox}>
            <p className={styles.itemDescriptionText}>{props.description}</p>
          </div>
          <hr />
          <div className={styles.priceBox}>
            <p className={styles.itemPrice}>R$ {props.price}</p>
          </div>
        </div>
        <div className={styles.location}>
          <p className={styles.itemLocation}>
            {props.cidade} - {props.estado}
          </p>
        </div>
        <div className={styles.button}>
          <button>WhatsApp</button>
        </div>
      </div>
    </div>
  );
};
