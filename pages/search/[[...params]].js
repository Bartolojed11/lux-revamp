import { useState } from 'react'

// Components
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'

const Search = () => {
    const [search, setSearch] = useState('Snicker')
    return (
        <>
            <Header />
            <div className='container-fluid margin-65 search-result-page'>
                <p className='search-result-label'>Search result for `&quote`{search}`&quote`</p>
            </div>
            <ProductCard />
            <Footer />
        </>
    )
}

export default Search
