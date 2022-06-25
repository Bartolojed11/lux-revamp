// Components
import Header from './../components/Header';
import Banner from './../components/Banner';
import Categories from './../components/Categories';
import Separator from './../components/Separator';
import ProductCard from './../components/ProductCard';
import Footer from './../components/Footer';
import Login from './../components/Login';
import ForgotPassword from './../components/ForgotPassword';
import Register from './../components/Register';

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
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      <Register />
      <Footer />
    </>
  )
}

export default Home