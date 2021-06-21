import ProductDetails from '../../components/ProductPage/ProductDetails.js'
import SubNav from '../../components/ProductPage/SubNav.js'
import Promo from '../../components/ProductPage/Promo.js'
import './ProductPage.scss'
import RelatedProducts from '../../components/ProductPage/RelatedProducts.js'
import Header from '../../components/HomePage/Header.js'
import Footer from '../../components/HomePage/Footer.js'
import {connect} from 'react-redux'

function Products({products}){

    return(

        <div>
            <Header/>
            <SubNav />
            <div className="products product_details">
            {products.map((prod) => {
                <ProductDetails key={prod.id} productData={prod}/>
            })}
                <div className="promo_container">
                    <Promo />
                </div>
            </div>
            <RelatedProducts/>
            <Footer/>
        </div>

    )

}

const mapStateToProps = state => {

    return{
        products: state.check.products,
    }

}

export default connect(mapStateToProps)(Products);