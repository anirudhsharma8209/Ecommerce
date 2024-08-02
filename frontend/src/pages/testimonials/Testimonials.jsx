import React from 'react'

const Testimonials = () => {
    return (
        <div className="section bg_redon">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="heading_s1 text-center">
                            <h2>Our Client Say!</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="testimonial_wrap testimonial_style1 carousel_slider owl-carousel owl-theme nav_style2" data-nav="true" data-dots="false" data-center="true" data-loop="true" data-autoplay="true" data-items='1'>
                            <div className="testimonial_box">
                                <div className="testimonial_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                                </div>
                                <div className="author_wrap">
                                    <div className="author_img">
                                        <img src="assets/images/user_img1.jpg" alt="user_img1" />
                                    </div>
                                    <div className="author_name">
                                        <h6>Lissa Castro</h6>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial_box">
                                <div className="testimonial_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                                </div>
                                <div className="author_wrap">
                                    <div className="author_img">
                                        <img src="assets/images/user_img2.jpg" alt="user_img2" />
                                    </div>
                                    <div className="author_name">
                                        <h6>Alden Smith</h6>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial_box">
                                <div className="testimonial_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                                </div>
                                <div className="author_wrap">
                                    <div className="author_img">
                                        <img src="assets/images/user_img3.jpg" alt="user_img3" />
                                    </div>
                                    <div className="author_name">
                                        <h6>Daisy Lana</h6>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial_box">
                                <div className="testimonial_desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                                </div>
                                <div className="author_wrap">
                                    <div className="author_img">
                                        <img src="assets/images/user_img4.jpg" alt="user_img4" />
                                    </div>
                                    <div className="author_name">
                                        <h6>John Becker</h6>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials