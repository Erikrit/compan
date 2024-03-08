import React from 'react'
import styles from './DescriptionBox.module.css'

export const DescriptionBox = (props) => {

   const {product} = props;

  return (
    <div className={styles.descriptionBox_container}>
        <div className={styles.descriptionBox_navigator}>
        <div className={styles.descriptionBox_nav_box}>Descrição</div>
        <div className={styles.descriptionBox_nav_box2}>Reviews</div>
        </div>
        <div className={styles.descriptionBox_description}>
            <p>{product.description}</p>
        </div>
    </div>
  )
}
