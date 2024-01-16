import React from 'react'
import styles from "./Item.module.css";
import { CardButton } from '../../../styles/charges-batch';
import { Link } from 'react-router-dom';


export const Item = (props) => {
  return (
    <div className={styles.item}>
        <Link to={`/products/${props.id}`}><img src={props.image} alt=''/></Link>
        <p>{props.name}</p>
        <div className={styles.item_prices}>
            R$ {props.price}
        </div>
        <p>{props.cidade} - {props.estado}</p>
        <button>WhatsApp</button>
    </div>
  )
}
