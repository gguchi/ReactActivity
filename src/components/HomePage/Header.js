import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="App">
        <header className="header">

            <div className="language_switcher">

                <select name="language_list" id="language">
                    <option value="english">ENG</option>
                </select>

                <select name="currency_list" id="currency">
                    <option value="english">USD</option>
                </select>

            </div>

            <div className="session_details">

                <div className="profile">    
                    <i><FontAwesomeIcon icon={faUser}/></i>
                    <a href="sign-in.html"> My profile </a>
                </div>
                <div className="basket">
                <i><FontAwesomeIcon icon={faShoppingBasket}/></i>
                    <Link to="/Checkout">Items</Link>
                    <div className="cost">$0.00</div>
                </div>

                <div className="session_search">
                    <input type="text" name="search" className="session_search_box" />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>

            </div>

        </header>

        <section className="navigation_banner">
            <section className="logo">

            <Link to={"/"}> <span className="logoLink"><h1 className="first">RAKU</h1><h1 className="last">TECH</h1> </span></Link>

            </section>

            <nav className="navigation_bar">

                <ul>
                    <li className="dropdown"> 
                    <li><Link to="/">HOME</Link></li>  
                            <div className="dropdown_content">

                                <div className="dropdown_container">

                                    <div className="content_container">

                                        <h2>Category</h2>
                                        <li>Airport  Wireless</li>
                                        <li>Apple Care</li>
                                        <li>Bags, Shells  Sleeves</li>
                                        <li>Business  Security</li>
                                        <li>Cables  Docks</li>
                                        
                                    </div>

                                    <div className="content_container sub">

                                        <li>Camera  Videos</li>
                                        <li>Car  Travel</li>
                                        <li>Cases  Films</li>

                                    </div>
                                    
                                    <div className="content_container second">

                                        <h2>Category</h2>
                                        <li>Chargin Devices</li>
                                        <li>Connected Home</li>
                                        <li>Device Care</li>
                                        <li>Display  Graphic</li>
                                        <li>Fitness  Sport</li>
                                    
                                    </div>

                                    <div className="content_container second_sub">

                                        <li>Headphones</li>
                                        <li>Healthkit</li>

                                    </div>

                                    <div className="content_container third">

                                        <h2>Category</h2>
                                        <li>Mice  Keyboards</li>
                                        <li>Music Creation</li>
                                        <li>Networking  Server</li>
                                    
                                    </div>

                                </div>

                            </div>
                    </li>
                    <li> <Link to="/Store">STORE</Link></li>
                    <li> IPHONE</li>
                    <li> IPAD </li>
                    <li> MACBOOK</li>
                    <li> <Link to="/Products">ACCESSORIES</Link></li>
            
                </ul>

            </nav>
        </section>
    </div>
  );
}

export default Header;
