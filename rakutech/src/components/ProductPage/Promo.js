import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Cards from '../../components/HomePage/ProductCards.js'
import './Promo.scss'

function Promo(){

    return(

        <div className="promo">
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro" style={{height: 100}}/>
        </div>

    )

}

export default Promo;