import './ProductBannerSub.scss'
import subBannerImage from '../../images/iPhone6.png'

function ProductBannerSub(){

    return(

        <section className="product_banner_sub">

        <div className="product_banner_text_sub">

            <h1>iPhone 6 Plus</h1>
            <p>Performance and Design. Taken right to the edge.</p>

            <a href=""> SHOP NOW</a>

        </div>

        <div className="product_banner_image_sub">

            <img src={subBannerImage} alt=""/>

        </div>

    </section>

    )

}

export default ProductBannerSub;