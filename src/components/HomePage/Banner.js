import './Banner.scss';
import banner_img from '../../images/iphone1.png';

function Banner(){

    return(

        <section class="product_banner">

            <div class="product_previous">

                <i class="fal fa-chevron-left"></i>

            </div>

            <div class="product_banner_text">

                <h1>iPhone X</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum eligendi placeat amet velit consequatur rem.</p>

                <a href="">MORE</a>

            </div>

            <div class="product_banner_image">

                <img src={banner_img} alt=""/>

            </div>

            <div class="product_next">

                <i class="fal fa-chevron-right"></i>

            </div>

        </section>


    );

}

export default Banner;
