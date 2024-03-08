import React from 'react'
import styles from './ProductDisplay.module.css'
import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";



const ProductDisplay = (props) => {
    const {product} = props;

  return (
    <div className={styles.productdisplay_container}>
        <div className={styles.productdisplay_left}>
            <div className={styles.productdisplay_list}>
                <img src={product.imgurl}/>
                <img src={product.imgurl}/>
                <img src={product.imgurl}/>
                <img src={product.imgurl}/>
            </div>
            <div className={styles.productdisplay_img}>
                <img className={styles.productdisplay_main_img} src={product.imgurl}/>
            </div>
        </div>
        <div className={styles.productdisplay_right}>
             <h1>{product.name}</h1>
             <div className={styles.productdisplay_right_stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
                <p>(122)</p>
             </div>
             <div className={styles.productdisplay_right_price}>
                <div className={styles.productdisplay_price}>R${product.price}</div>
             </div>
             <div className={styles.productdisplay_description}>
                {product.description}
             </div>
             <div className={styles.productdisplay_right_size}>
                <h1></h1>
             </div>

                <button className={styles.productdisplay_button_fav}>ADICIONAR AOS FAVORITOS</button>
                <button className={styles.productdisplay_button_whats}>WhatsApp</button>
             
             <p className={styles.productdisplay_category}><span>Categoria: </span>{product.category}</p>
             <p className={styles.productdisplay_category}><span>Tag: </span>{product.subcaterory}</p>
        </div>
    </div>
  )
}

export default ProductDisplay