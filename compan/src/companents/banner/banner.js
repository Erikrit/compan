import React from "react";
import styles from "./Banner.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_left}>
        {/* <h2>NÃO PERCA A CHANCE</h2> */}
        <div>
          <p>Ache anuncios</p>
          <p>ou</p>
          <p>Anuncie você mesmo!</p>
        </div>
        <div className={styles.banner_lastet_btn}>
          <div>Anuncie aqui!</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </div> 
      </div>
      <div className={styles.banner_right}>
        {/* caso precise colocar imagem */}
      </div>
    </div>
  );
};

export default Banner;
