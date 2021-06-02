import './ProductCards.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import prod_image from '../../images/50061505_575246.png';

function Cards(props){
    return(
        <div className="container">
        <div className="container card">
            <div className="card__image">
                <img src={prod_image} alt="" className="card__image--pic"/>
            </div>
            <div className="card__title">
                {props.prod_name}
            </div>
            <div className="card__rating">
                <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                <FontAwesomeIcon icon={faStar} className="card__rating--gray"/>
            </div>
            <div className="card__price">
                <div className="card__price--discounted">
                    {props.discounted_price}
                </div>
                <div className="card__price--original">
                    {props.original_price}
                </div>
            </div>
        </div>
        </div>
    
    
)

}
export default Cards;