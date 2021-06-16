import ProductDetails from '../../components/ProductPage/ProductDetails.js'
import SubNav from '../../components/ProductPage/SubNav.js'
import Promo from '../../components/ProductPage/Promo.js'
import './ProductPage.scss'
import RelatedProducts from '../../components/ProductPage/RelatedProducts.js'

function Products(){

    return(

        <div>
            <SubNav />
            <div className="products product_details">
            <ProductDetails />
                <div className="promo_container">
                    <Promo />
                </div>
            </div>
            <RelatedProducts/>
        </div>

    )

}

export default Products;