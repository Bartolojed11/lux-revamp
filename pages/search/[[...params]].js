import { useState, useEffect } from 'react'

// Components
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'

const Search = ({ products, searchQuery }) => {

  return (
    <>
      <Navbar />
      <div className='container-fluid margin-65 search-result-page'>
        <p className='search-result-label'>Search result for "{searchQuery}"</p>
      </div>
      <ProductCard products={products} searchQuery={searchQuery}/>
      <Footer />
    </>
  )
}

export default Search

export async function getServerSideProps(context) {
  const { name } = context.query
  const response = await fetch(process.env.apiUrl + 'products/search?name=' + name)
  const json = await response.json()
  const { products } = json.data || []

  return {
    props: {
      products,
      searchQuery: name
    }
  }
}
