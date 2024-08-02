import React from 'react'

const Blog = () => {
    return (
        <>
            <div className="breadcrumb_section bg_gray page-title-mini">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h1>Blog three columns</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ol className="breadcrumb justify-content-md-end">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Blog</a></li>
                                <li className="breadcrumb-item active">Blog three columns</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog_post blog_style2 box_shadow1">
                                <div className="blog_img">
                                    <a href="blog-single.html">
                                        <img src="assets/images/blog_small_img1.jpg" alt="blog_small_img1" />
                                    </a>
                                </div>
                                <div className="blog_content bg-white">
                                    <div className="blog_text">
                                        <h5 className="blog_title"><a href="blog-single.html">But I must explain to you how all this mistaken idea</a></h5>
                                        <ul className="list_none blog_meta">
                                            <li><a href="#"><i className="ti-calendar"></i> April 14, 2018</a></li>
                                            <li><a href="#"><i className="ti-comments"></i> 10</a></li>
                                        </ul>
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog_post blog_style2 box_shadow1">
                                <div className="blog_img">
                                    <a href="blog-single.html">
                                        <img src="assets/images/blog_small_img2.jpg" alt="blog_small_img2" />
                                    </a>
                                </div>
                                <div className="blog_content bg-white">
                                    <div className="blog_text">
                                        <h5 className="blog_title"><a href="blog-single.html">On the other hand we provide denounce with righteous</a></h5>
                                        <ul className="list_none blog_meta">
                                            <li><a href="#"><i className="ti-calendar"></i> April 14, 2018</a></li>
                                            <li><a href="#"><i className="ti-comments"></i> 12</a></li>
                                        </ul>
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog_post blog_style2 box_shadow1">
                                <div className="blog_img">
                                    <a href="blog-single.html">
                                        <img src="assets/images/blog_small_img3.jpg" alt="blog_small_img3" />
                                    </a>
                                </div>
                                <div className="blog_content bg-white">
                                    <div className="blog_text">
                                        <h5 className="blog_title"><a href="blog-single.html">Why is a ticket to Lagos so expensive?</a></h5>
                                        <ul className="list_none blog_meta">
                                            <li><a href="#"><i className="ti-calendar"></i> April 14, 2018</a></li>
                                            <li><a href="#"><i className="ti-comments"></i> 14</a></li>
                                        </ul>
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-2 mt-md-4">
                            <ul className="pagination pagination_style1 justify-content-center">
                                <li className="page-item disabled"><a className="page-link" href="#" tabindex="-1"><i className="linearicons-arrow-left"></i></a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#"><i className="linearicons-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog