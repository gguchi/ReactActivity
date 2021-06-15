import ProductBanner from '../../components/HomePage/ProductBannerSub';
import AccessoriesFilter from '../../components/Store/AccessoriesFilter.js'
import BrandFilter from '../../components/Store/BrandFilter';
import ColorFilter from '../../components/Store/ColorFilter';
import More from '../../components/Store/More';
import PriceFilter from '../../components/Store/PriceFilter';
import ListFilter from '../../components/Store/ListFilter';
import './Store.scss'
import ListView from '../../components/Store/ListView';

function Store(){

    return(

        <div className="store">

            <div className="store__filter">

                <AccessoriesFilter/>
                <PriceFilter/>
                <ColorFilter/>
                <BrandFilter/>
                <More/>

            </div>

            <div className="store__body">

            <div className="store__banner">

                <ProductBanner/>

            </div>

            <div className="store__list_filter">

                <ListFilter/>

            </div>

            <div className="store__product">

                <ListView/>

            </div>

            </div>

        </div>

    );

}

export default Store;