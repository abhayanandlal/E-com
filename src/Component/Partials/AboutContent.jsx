import React from "react";

export default function AboutContent() {
    return (
        <>
            {/* <!-- About Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div
                                className="position-relative overflow-hidden ps-5 pt-5 h-100"
                                style="min-height: 400px"
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    src="img/about.jpg"
                                    alt=""
                                    style="object-fit: cover"
                                />
                                <div
                                    className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                                    style="width: 200px; height: 200px"
                                >
                                    <div
                                        className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3"
                                    >
                                        <h1 className="text-white">25</h1>
                                        <h2 className="text-white">Years</h2>
                                        <h5 className="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <div className="border-start border-5 border-primary ps-4 mb-5">
                                    <h6 className="text-body text-uppercase mb-2">About Us</h6>
                                    <h1 className="display-6 mb-0">
                                        Unique Solutions For Residentials & Industries!
                                    </h1>
                                </div>
                                <p>
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                                    sed stet lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                                    sed stet lorem sit clita duo justo magna dolore erat amet
                                </p>
                                <div className="border-top mt-4 pt-4">
                                    <div className="row g-4">
                                        <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.1s">
                                            <i
                                                className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                            ></i>
                                            <h6 className="mb-0">Ontime at services</h6>
                                        </div>
                                        <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.3s">
                                            <i
                                                className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                            ></i>
                                            <h6 className="mb-0">24/7 hours services</h6>
                                        </div>
                                        <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.5s">
                                            <i
                                                className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                            ></i>
                                            <h6 className="mb-0">Verified professionals</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {/* <!-- Facts Start --> */}
            <div className="container-fluid my-5 p-0">
                <div className="row g-0">
                    <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/fact-1.jpg" alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">01</h1>
                                <h4 className="text-white mb-3">Construction</h4>
                                <p className="text-white">
                                    Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                                    clita duo justo erat amet
                                </p>
                                <a className="text-white small" href=""
                                >READ MORE<i className="fa fa-arrow-right ms-3"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/fact-2.jpg" alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">02</h1>
                                <h4 className="text-white mb-3">Mechanical</h4>
                                <p className="text-white">
                                    Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                                    clita duo justo erat amet
                                </p>
                                <a className="text-white small" href=""
                                >READ MORE<i className="fa fa-arrow-right ms-3"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/fact-3.jpg" alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">03</h1>
                                <h4 className="text-white mb-3">Architecture</h4>
                                <p className="text-white">
                                    Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                                    clita duo justo erat amet
                                </p>
                                <a className="text-white small" href=""
                                >READ MORE<i className="fa fa-arrow-right ms-3"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/fact-4.jpg" alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">04</h1>
                                <h4 className="text-white mb-3">Interior Design</h4>
                                <p className="text-white">
                                    Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                                    clita duo justo erat amet
                                </p>
                                <a className="text-white small" href=""
                                >READ MORE<i className="fa fa-arrow-right ms-3"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Facts End --> */}

            {/* <!-- Features Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="border-start border-5 border-primary ps-4 mb-5">
                                <h6 className="text-body text-uppercase mb-2">Why Choose Us!</h6>
                                <h1 className="display-6 mb-0">
                                    Our Specialization And Company Features
                                </h1>
                            </div>
                            <p className="mb-5">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center mb-3">
                                        <i
                                            className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                        ></i>
                                        <h6 className="mb-0">Large number of services provided</h6>
                                    </div>
                                    <span
                                    >Magna sea eos sit dolor, ipsum amet ipsum lorem diam</span
                                    >
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="d-flex align-items-center mb-3">
                                        <i
                                            className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                        ></i>
                                        <h6 className="mb-0">25+ years of professional experience</h6>
                                    </div>
                                    <span
                                    >Magna sea eos sit dolor, ipsum amet ipsum lorem diam</span
                                    >
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="d-flex align-items-center mb-3">
                                        <i
                                            className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                        ></i>
                                        <h6 className="mb-0">A large number of grateful customers</h6>
                                    </div>
                                    <span
                                    >Magna sea eos sit dolor, ipsum amet ipsum lorem diam</span
                                    >
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div className="d-flex align-items-center mb-3">
                                        <i
                                            className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                                        ></i>
                                        <h6 className="mb-0">Always reliable and affordable prices</h6>
                                    </div>
                                    <span
                                    >Magna sea eos sit dolor, ipsum amet ipsum lorem diam</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div
                                className="position-relative overflow-hidden ps-5 pt-5 h-100"
                                style="min-height: 400px"
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    src="img/feature.jpg"
                                    alt=""
                                    style="object-fit: cover"
                                />
                                <div
                                    className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                                    style="width: 200px; height: 200px"
                                >
                                    <div
                                        className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3"
                                    >
                                        <h1 className="text-white">25</h1>
                                        <h2 className="text-white">Years</h2>
                                        <h5 className="text-white mb-0">Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features End --> */}
        </>
    )
}