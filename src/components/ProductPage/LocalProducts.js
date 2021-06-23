import React from 'react';
import '../HomePage/ProductCards.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import productThumb_one from '../../images/products/50061505_575246.png';



function LocalProducts(){

    const localproducts = [
        {
            id: 1,
            name: 'AirPods Max',
            originalPrice: '$359',
            discountedPrice: '$256',
            productImage: "../../images/products/MWP22.png"
        },
    ] 

    const newproducts = localproducts.map(products => 
        
        <div className="container card">
            <div className="card__image">
                <img src={products.productImage} alt="" className="card__image--pic"/>
            </div>
            <div className="card__title">
                {products.name}
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
                    {products.discountedPrice}
                </div>
                <div className="card__price--original">
                    {products.original_price}
                </div>
            </div>
        </div>
    
        
        )

    return(
        <div>{newproducts}</div>
    )

}

export default LocalProducts;