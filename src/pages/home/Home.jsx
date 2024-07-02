import React from 'react'
import Banner from '../../components/banner/Banner'
import Catalog from '../../components/catalog/Catalog'
import NorLight from '../../components/norLight/NorLight'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'
import Blog from '../../components/blog/Blog'
import Text from '../../components/text/Text'

const Home = () => {
  return (
    <>
      <Banner/>
      <Catalog/>
      <NorLight/>
      <Products/>
      <Blog/>
      <Text/>
      <Footer/>
    </>
  )
}

export default Home