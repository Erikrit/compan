import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrums from '../../src/companents/BreadCrums/BreadCrums'


const Products = () => {

  const {productsData} = useContext(ShopContext)
  const {productId} = useParams();
  console.log("Product ID:", productId);
  /* console.log("Products Data:", productsData); */

  const product = productsData.find((e)=>e.id === Number(productId))

  return (
    <div>
      <BreadCrums product={product} />
    </div>
  )
}

export default Products