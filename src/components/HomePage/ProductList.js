import './ProductList.scss';
import Cards from './ProductCards.js';
import {connect} from 'react-redux';
import LocalProducts from '../ProductPage/LocalProducts';

const ProductList = ({products}) =>{

    const li = 0;
    const maxCards = 8;

    return(

        <div className="ProductList">
            <h3>BEST SELLER</h3>
            <div className="navigation_bar">
                <a href="">All</a>
                <a href="">Mac</a>
                <a href="">iPhone</a>
                <a href="">iPad</a>
                <a href="">iPod</a>
                <a href="">Accessories</a>    
            </div>    
            <div className="container">

            <LocalProducts/>

{/*                
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/> */}

            </div>

            <a href="load_more" className="load_product">LOAD MORE</a>

        </div>

    )

}
const mapStateToProps = state => {
    return{
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(ProductList);