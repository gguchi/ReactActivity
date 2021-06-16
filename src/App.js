import Home from './Pages/HomePage/Home.js'
import Header from './components/HomePage/Header.js'
import Footer from './components/HomePage/Footer.js'
import Products from './Pages/Products/ProductPage.js'
import Checkout from './components/Checkout/CheckoutPage.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Store from './Pages/Store/Store.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/Checkout" component={Checkout}/>
        <Route exact path="/Store" component={Store}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
