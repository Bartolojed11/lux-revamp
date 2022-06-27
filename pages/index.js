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