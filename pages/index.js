import Head from 'next/head'

// Components
import Header from './../components/Header'
import Banner from './../components/Banner'
import Categories from './../components/Categories'
import Separator from './../components/Separator'
import ProductCard from './../components/ProductCard'
import Footer from './../components/Footer'

const Home = () => {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Banner />
      <Categories />
      <Separator title="Top Products" />
      <ProductCard />
      <Separator title="Discover" />
      <ProductCard />
      <Footer />
    </>
  )
}

export default Home