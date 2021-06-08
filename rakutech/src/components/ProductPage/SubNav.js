import './SubNav.scss'
import { Link } from 'react-router-dom';

function SubNav(){

    return(
        <section>
            <div class="link-bar">
                <div class="link-bar__home">
                <Link to="/" className="links">Home</Link>
                </div>
                <div class="link-bar__slash">
                    /
                </div>
                <div class="link-bar__accessories">
                    Accessories
                </div>
                <div class="link-bar__slash">
                    /
                </div>
                <div class="link-bar__title">
                    Beat Solo2 on Ear Headphones - Black
                </div>
            </div>
        </section>

    )

}

export default SubNav;