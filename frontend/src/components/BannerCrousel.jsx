import React from 'react'

const BannerCrousel = ({ label, categoryLabel, buttonLabel }) => {
    return (
        <div className="banner_slide_content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-9">
                        <div className="banner_content overflow-hidden">
                            <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">{label}</h5>
                            <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">{categoryLabel}</h2>
                            <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">{buttonLabel}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCrousel