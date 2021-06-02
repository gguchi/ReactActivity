import './Products.scss';
import catalouge_img1 from '../../images/iPhone6.png';
import catalouge_img2 from '../../images/Oculus-Rift-profile_grande.png';
import catalouge_img3 from '../../images/50051823_540375.png';


function Products(){

    return(

        <div class="product_catalogue">

            <div class="catalogue_item one">
                
                <div class="product_details">

                    <h1>iPhone 6</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                    <h4>$399</h4>

                </div>

                <img src={catalouge_img1} alt=""/>

                </div>
                <div class="catalogue_item two">

                    <img src={catalouge_img2} alt=""/>

                    <div class="product_details">
                        <h2>Oculus Rift</h2>
                        <p>$349</p>
                    </div>
                        
                </div>
                <div class="catalogue_item three">

                    <div class="product_details">
                        <h2>GoPro Hero 6</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>$299</p>
                    </div>

                    <img src={catalouge_img3} alt=""/>
                    
                </div>

            </div>
    );

}

export default Products;