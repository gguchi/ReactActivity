
import Banner from '../../components/HomePage/Banner.js'
import Products from '../../components/HomePage/ProductsCatalogue.js'
import ProductList from '../../components/HomePage/ProductList.js'
import ProductBannerSub from '../../components/HomePage/ProductBannerSub.js'
import Services from '../../components/HomePage/Services.js'
import News from '../../components/HomePage/News.js'
import FeaturedProducts from '../../components/HomePage/FeaturedProducts/FeaturedProducts.js'
import PageSearch from '../../components/HomePage/PageSearch.js'

function Home(){

    return(

        <div>      
            <Banner/>
            <Products />
            <ProductList />
            <ProductBannerSub name="iPhone 6"/>
            <Services/>
            <News />
            <FeaturedProducts />
            <PageSearch/>
            
        </div>
    )

}

export default Home;