import React from 'react'
import styles from "./Item.module.css";
import { CardButton } from '../../../styles/charges-batch';


export const Item = (props) => {
  return (
    <div className={styles.item}>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className={styles.item_prices}>
            R$ {props.price}
        </div>
        <p>{props.cidade} - {props.estado}</p>
        <button>WhatsApp</button>
    </div>
  )
}
