import Head from 'next/head'

// Components
import Header from './../components/Header'
import Banner from './../components/Banner'
import Categories from './../components/Categories'
import Separator from './../components/Separator'
import ProductCard from './../components/ProductCard'
import Footer from './../components/Footer'


const Home = (props) => {
  const { products } = props
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
      <ProductCard products={products} />
      <Separator title="Discover" />
      <ProductCard products={products} />
      <Footer />
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const response = await fetch(process.env.apiExternalRoute + 'products/search')
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