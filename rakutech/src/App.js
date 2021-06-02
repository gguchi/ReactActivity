import Header from './components/HomePage/Header.js'
import Banner from './components/HomePage/Banner.js'
import Products from './components/HomePage/Products.js'
import Footer from './components/HomePage/Footer.js'
import ProductDetails from './components/HomePage/ProductDetails.js'
import ProductCards from './components/HomePage/ProductCards.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Products />
      <ProductCards prod_name="Apple MacBook Pro" discounted_price="$499" original_price="$599"/>
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
