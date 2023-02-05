// Components
import Navbar from './../components/Navbar'
import Banner from './../components/Banner'
import Categories from './../components/Categories'
import Separator from './../components/Separator'
import ProductCard from './../components/ProductCard'
import Footer from './../components/Footer'
import HtmlHeader from './../components/Header'

const Home = (props) => {
  const { products } = props

  return (
    <div className="home-page">
      <HtmlHeader />
      <Navbar />
      <Banner />
      <Categories />
      <Separator title="Top Products" />
      <ProductCard products={products} />
      <Separator title="Discover" />
      <ProductCard products={products} />
      <Footer />
    </div>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const response = await fetch(process.env.apiUrl + 'products/search')
  const json = await response.json()
  const { products } = json.data || {}

  return {
    props: {
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export default Home
