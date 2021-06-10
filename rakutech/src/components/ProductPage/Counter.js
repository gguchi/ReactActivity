import './ProductDetails.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus,} from '@fortawesome/free-solid-svg-icons'

function Counter(){

    return(

        <>
        
        <div className="counter">
            <div className="counter__button">
                <div className="counter__button--minus">
                    <FontAwesomeIcon icon={faMinus}/>
                </div>
                <div className="counter__button--count">
                    <input type="text" className="counter__button--counter" value="0"/>
                </div>
                <div className="counter__button--plus">
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            </div>
        </div>

        </>

    )

}

export default Counter;