import React from 'react'
import ExclusiveProducts from './pages/exclusive_products'
import SingleBanner from './pages/single_banner'
import FeaturedProducts from './pages/featured_products'
import Testimonials from './pages/testimonials'
import ShopDetails from './pages/shop_details/ShopDetails'
import Banner from "./layout/Banner"

const Home = () => {
    return (
        <>
            <div className="banner_section">
                <Banner />
            </div>
            <div className="banner_and_exclusive">
                <ExclusiveProducts />
                <SingleBanner />
            </div>
            <div className="featured_products">
                <FeaturedProducts />
            </div>
            <div className="testimonials">
                <Testimonials />
            </div>
            <div className="shop_details">
                <ShopDetails />
            </div>
        </>
    )
}

export default Home