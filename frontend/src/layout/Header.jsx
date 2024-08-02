import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header_wrap fixed-top header_with_topbar">
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                <div className="lng_dropdown me-2">                                    
                                    <select name="countries" className="custome_select" id="msdrpdd20" >
                                        <option value="en" data-image="assets/images/eng.png" data-title="English">English</option>
                                        <option value="fn" data-image="assets/images/fn.png" data-title="France">France</option>
                                        <option value="us" data-image="assets/images/us.png" data-title="United States">United States</option>
                                    </select>                            
                                </div>
                                <div className="me-3">
                                    <select name="countries" className="custome_select">
                                        <option value='USD' data-title="USD">USD</option>
                                        <option value='EUR' data-title="EUR">EUR</option>
                                        <option value='GBR' data-title="GBR">GBR</option>
                                    </select>
                                </div>
                                <ul className="contact_detail text-center text-lg-start">
                                    <li><i className="ti-mobile"></i><span>123-456-7890</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center text-md-end">
                                <ul className="header_list">
                                    <li><Link to="compare.html"><i className="ti-control-shuffle"></i><span>Compare</span></Link></li>
                                    <li><Link to="wishlist.html"><i className="ti-heart"></i><span>Wishlist</span></Link></li>
                                    <li><Link to="/login"><i className="ti-user"></i><span>Login</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_header dark_skin main_menu_uppercase">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="index.html">
                            <img className="logo_light" src="assets/images/logo_light.png" alt="logoo" />
                            <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                            <span className="ion-android-menu"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="dropdown">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="dropdown">
                                    <Link className="nav-link" to="/">Pages</Link>
                                </li>
                                <li className="dropdown dropdown-mega-menu">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="dropdown">
                                    <Link className="nav-link" to="/blog" >Blog</Link>
                                </li>                               
                                <li><Link className="nav-link nav_item" to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav attr-nav align-items-center">
                            <li><a href="#" className="nav-link search_trigger"><i className="linearicons-magnifier"></i></a>
                                <div className="search_wrap">
                                    <span className="close-search"><i className="ion-ios-close-empty"></i></span>
                                    <form>
                                        <input type="text" placeholder="Search" className="form-control" id="search_input" />
                                        <button type="submit" className="search_icon"><i className="ion-ios-search-strong"></i></button>
                                    </form>
                                </div><div className="search_overlay"></div>
                            </li>
                            <li className="dropdown cart_dropdown"><a className="nav-link cart_trigger" href="#" data-bs-toggle="dropdown"><i className="linearicons-cart"></i><span className="cart_count">2</span></a>
                                <div className="cart_box dropdown-menu dropdown-menu-right">
                                    <ul className="cart_list">
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src="assets/images/cart_thamb1.jpg" alt="cart_thumb1" />Variable product 001</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>78.00</span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src="assets/images/cart_thamb2.jpg" alt="cart_thumb2" />Ornare sed consequat</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>81.00</span>
                                        </li>
                                    </ul>
                                    <div className="cart_footer">
                                        <p className="cart_total"><strong>Subtotal:</strong> <span className="cart_price"> <span className="price_symbole">$</span></span>159.00</p>
                                        <p className="cart_buttons"><a href="#" className="btn btn-fill-line rounded-0 view-cart">View Cart</a><a href="#" className="btn btn-fill-out rounded-0 checkout">Checkout</a></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header