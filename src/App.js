import Home from './Pages/HomePage/Home.js'
import Products from './Pages/Products/ProductPage.js'
import Checkout from './components/Checkout/CheckoutPage.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Store from './Pages/Store/Store.js'
import SignIn from './Pages/SignIn/SignIn.js'
import SignUp from './Pages/SignUp/SignUp.js'
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <Router>
    <Switch>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/Checkout" component={Checkout}/>
        <Route exact path="/Store" component={Store}/>
        <Route exact path="/SignIn" component={SignIn}/>
        <Route exact path="/SignUp" component={SignUp}/>
        </div>
      </Switch>  
      </Router>
  );
}

export default App;
