import React from 'react'
import styles from "./Popular.module.css";
import { productsData } from '../Assets/data';
import { Item } from '../Item/Item';

const Popular = () => {
  return (
    <div className={styles.popular}>
        <h1>POPULAR</h1>
        <hr/>
        <div className={styles.popular_item}>
            {productsData.map((item)=> {
                return <Item key={item} id={item.id} name={item.name} image={item.imgurl} price={item.price} cidade={item.cidade} estado={item.estado}/>
            })}
        </div>
    </div>
  )
}

export default Popular