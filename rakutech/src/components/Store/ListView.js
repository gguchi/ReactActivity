import './ListView.scss'

function ListView(){

    return(

        <div className="list__view">

            <div className="container">

                <div className="image__container">
                    <img className="list__view_image"/>
                </div>

                <div className="detail__container">

                    <p className="product__name">Beats Solo 2 On Ear Headphones - Black</p>
                    
                    <div className="review__container">

                        <div className="stars">


                        </div>

                        <div className="review__number">
                            <input type="text" placeholder="0" value="0"></input>
                            <p>reviews</p>
                        </div>

                        <button className="submit__review">Submit a review</button>

                    </div>

                    <div className="price__container">

                        <p className="discounted__price">$499</p>
                        <p className="original__price">$599</p>

                    </div>

                    <div className="product__details">

                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, 
                    gravida et mattis vulputate, tristique ut lectus. 
                    Sed et lectus lorem nunc leifend laorevtr istique et congue. 
                    Vivamus adipiscin vulputate g nisl ut dolor ...

                    </div>

                </div>
            </div>

        </div>

    );

}

export default ListView;