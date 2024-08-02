import React from 'react'
import BannerCrousel from '../components/BannerCrousel'

const Banner = () => {
    
    let bannerDetails = [
        { firstHeading: "Get up to 50% off Today Only!", scondHeading: "Woman Fashion", thirdHeading: "Shop Now" },
        { firstHeading: "50% off in all products", scondHeading: "Man Fashion", thirdHeading: "Shop Now" },
        { firstHeading: "Taking your Viewing Experience to Next Level", scondHeading: "Summer Sale", thirdHeading: "Shop Now" }
    ]

    return (
        <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
            <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        bannerDetails.map((item, index) => (
                            (index === 1) ?
                                <div key={index} className="carousel-item active background_bg" style={{ backgroundImage: `url(assets/images/banner${index + 1}.jpg)` }}>
                                    <BannerCrousel label={item.firstHeading} categoryLabel={item.scondHeading} buttonLabel={item.thirdHeading} />
                                </div>
                                : <div key={index} className="carousel-item background_bg" style={{ backgroundImage: `url(assets/images/banner${index + 1}.jpg)` }}>
                                    <BannerCrousel label={item.firstHeading} categoryLabel={item.scondHeading} buttonLabel={item.thirdHeading} />
                                </div>
                        ))
                    }
                </div>

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"><i className="ion-chevron-left"></i></a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"><i className="ion-chevron-right"></i></a>
            </div>
        </div>
    )
}

export default Banner