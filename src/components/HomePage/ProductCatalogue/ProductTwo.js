import '../ProductsCatalogue.scss'
import catalouge_img2 from '../../../images/Oculus-Rift-profile_grande.png';

function ProductTwo(){

    return(

        <div class="catalogue_item two">

        <img src={catalouge_img2} alt=""/>

        <div class="product_details">
            <h2>Oculus Rift</h2>
            <p>$349</p>
        </div>
            
        </div>

    )

}

export default ProductTwo;