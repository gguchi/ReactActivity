import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

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
                    <a href="checkout-page.html">Items</a>
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

                <h1 class="first">RAKU</h1><h1 class="last">TECH</h1>

            </section>

            <nav class="navigation_bar">

                <ul>
                    <li class="dropdown"> 
                        <a href="index.html" class="dropbtn">HOME</a>  
                            <div class="dropdown_content">

                                <div class="dropdown_container">

                                    <div class="content_container">

                                        <h2>Category</h2>
                                        <a href="#">Airport & Wireless</a>
                                        <a href="#">Apple Care</a>
                                        <a href="#">Bags, Shells & Sleeves</a>
                                        <a href="#">Business & Security</a>
                                        <a href="#">Cables & Docks</a>
                                        
                                    </div>

                                    <div class="content_container sub">

                                        <a href="#">Camera & Videos</a>
                                        <a href="#">Car & Travel</a>
                                        <a href="#">Cases & Films</a>

                                    </div>
                                    
                                    <div class="content_container second">

                                        <h2>Category</h2>
                                        <a href="#">Chargin Devices</a>
                                        <a href="#">Connected Home</a>
                                        <a href="#">Device Care</a>
                                        <a href="#">Display & Graphic</a>
                                        <a href="#">Fitness & Sport</a>
                                    
                                    </div>

                                    <div class="content_container second_sub">

                                        <a href="#">Headphones</a>
                                        <a href="#">Healthkit</a>

                                    </div>

                                    <div class="content_container third">

                                        <h2>Category</h2>
                                        <a href="#">Mice & Keyboards</a>
                                        <a href="#">Music Creation</a>
                                        <a href="#">Networking & Server</a>
                                    
                                    </div>

                                </div>

                            </div>
                    </li>
                    <li> <a href="">STORE</a></li>
                    <li> <a href="product.html">IPHONE</a> </li>
                    <li> <a href="">IPAD</a> </li>
                    <li> <a href="">MACBOOK</a></li>
                    <li> <a href="product.html">ACCESSORIES</a> </li>
            
                </ul>

            </nav>
        </section>
    </div>
  );
}

export default Header;
