import React from "react";
import styles from "./Banner.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_left}>
        <h2>APENAS PEÇAS NOVAS</h2>
        <div>
          <p>Novas</p>
          <p>Coleções</p>
          <p>Para todos os gostos</p>
        </div>
        <div className={styles.banner_lastet_btn}>
          <div>Ultimos Lançamentos</div>
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
