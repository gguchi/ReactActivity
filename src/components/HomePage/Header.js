import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="App">
        <header class="header">

            <div class="language_switcher">

                <select name="language_list" id="language">
                    <option value="english">ENG</option>
                </select>

                <select name="currency_list" id="currency">
                    <option value="english">USD</option>
                </select>

            </div>

            <div class="session_details">

                <div class="profile">    
                    <i><FontAwesomeIcon icon={faUser}/></i>
                    <a href="sign-in.html"> My profile </a>
                </div>
                <div class="basket">
                <i><FontAwesomeIcon icon={faShoppingBasket}/></i>
                    <Link to="/Checkout">Items</Link>
                    <div class="cost">$0.00</div>
                </div>

                <div class="session_search">
                    <input type="text" name="search" class="session_search_box" />
                    <button type="submit"><i class="fas fa-search"></i></button>
                </div>

            </div>

        </header>

        <section class="navigation_banner">
            <section class="logo">

            <Link to={"/"}> <span className="logoLink"><h1 class="first">RAKU</h1><h1 class="last">TECH</h1> </span></Link>

            </section>

            <nav class="navigation_bar">

                <ul>
                    <li class="dropdown"> 
                    <li><Link to="/">HOME</Link></li>  
                            <div class="dropdown_content">

                                <div class="dropdown_container">

                                    <div class="content_container">

                                        <h2>Category</h2>
                                        <a >Airport & Wireless</a>
                                        <a >Apple Care</a>
                                        <a >Bags, Shells & Sleeves</a>
                                        <a >Business & Security</a>
                                        <a >Cables & Docks</a>
                                        
                                    </div>

                                    <div class="content_container sub">

                                        <a >Camera & Videos</a>
                                        <a >Car & Travel</a>
                                        <a >Cases & Films</a>

                                    </div>
                                    
                                    <div class="content_container second">

                                        <h2>Category</h2>
                                        <a >Chargin Devices</a>
                                        <a >Connected Home</a>
                                        <a >Device Care</a>
                                        <a >Display & Graphic</a>
                                        <a >Fitness & Sport</a>
                                    
                                    </div>

                                    <div class="content_container second_sub">

                                        <a >Headphones</a>
                                        <a >Healthkit</a>

                                    </div>

                                    <div class="content_container third">

                                        <h2>Category</h2>
                                        <a >Mice & Keyboards</a>
                                        <a >Music Creation</a>
                                        <a >Networking & Server</a>
                                    
                                    </div>

                                </div>

                            </div>
                    </li>
                    <li> <Link to="/Store">STORE</Link></li>
                    <li> <a> IPHONE</a></li>
                    <li> <a >IPAD</a> </li>
                    <li> <a >MACBOOK</a></li>
                    <li> <Link to="/Products">ACCESSORIES</Link></li>
            
                </ul>

            </nav>
        </section>
    </div>
  );
}

export default Header;
