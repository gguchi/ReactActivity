import Home from './Pages/HomePage/Home.js'
import Header from './components/HomePage/Header.js'
import Footer from './components/HomePage/Footer.js'
import Products from './Pages/Products/Products.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>

        <Route exact path="/Products" component={Products}/>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
