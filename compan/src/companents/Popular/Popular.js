import React from "react";
import styles from "./popular.module.css";
import { popularItens } from "../Assets/popularItens";
import { Item } from "../Item/Item";
import "bootstrap/dist/css/bootstrap.min.css";

export const Popular = () => {
  return (
    <div className={styles.popularcontainer}>
      <h1>Mais Populares</h1>
      <hr />
      <div className={styles.popularItens}>
        {popularItens.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.imgurl}
              description={item.description}
              price={item.price}
              cidade={item.cidade}
              estado={item.estado}
            />
          );
        })}
      </div>
    </div>
  );
};
