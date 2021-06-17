import './ProductList.scss'
import Cards from './ProductCards.js'

function ProductList(){

    return(

        <div className="ProductList">
            <h3>BEST SELLER</h3>
            <div className="navigation_bar">
                <li>All
                <li>Mac
                <li>iPhone
                <li>iPad
                <li>iPod
                <li>Accessories    
            </div>    
            <div className="container">

            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro"/>

            </div>

            <a href="load_more" className="load_product">LOAD MORE

        </div>

    )

}

export default ProductList;