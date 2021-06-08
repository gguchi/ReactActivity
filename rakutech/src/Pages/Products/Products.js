import ProductDetails from '../../components/ProductPage/ProductDetails.js'
import SubNav from '../../components/ProductPage/SubNav.js'
import Promo from '../../components/ProductPage/Promo.js'
import './Products.scss'

function Products(){

    return(

        <div>
            <SubNav />
            <div className="products product_details">
            <ProductDetails />
            <Promo/>
            </div>
        </div>
    )

}

export default Products;