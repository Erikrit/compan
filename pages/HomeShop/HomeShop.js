import React from 'react'
import Banner from '../../src/companents/banner/banner'
import AllProducts from '../../src/companents/AllProducts/allProducts'
import NewsLetter from '../../src/companents/NewsLetter.js/NewsLetter'
import { Popular } from '../../src/companents/Popular/Popular'


const HomeShop = () => {
  return (
    <div>
      {/* <Banner/> */}
      <Popular/>
      <AllProducts/>
      <NewsLetter/>
    </div>
  )
}

export default HomeShop