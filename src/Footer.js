import companyLogo from "./images/company/motif-white-logo.png";
const Footer = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2659a5" fill-opacity="1" d="M0,224L60,240C120,256,240,288,360,288C480,288,600,256,720,245.3C840,235,960,245,1080,240C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className="footer-container">
                <div className="container py-5">
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
                        <div className="col mt-3">
                            <img className="mx-auto" src={companyLogo} alt="" />
                            <p className="text-white mt-5">
                                We provide flexible educational services designed to support institutions and aspiring students in reaching their maximum potential. We provide flexible educational services designed to support institutions and aspiring students in reaching their maximum potential.
                            </p>
                        </div>
                        <div className="col mt-3">
                            <h3 className="footer-heading text-uppercase">
                                Quick Links
                            </h3>
                            <div className="small-line"></div>
                            <div className="container px-0 footer-link">
                                <ul>
                                    <li>About Us</li>
                                    <li>Countries</li>
                                    <li>Our Partners</li>
                                    <li>Team</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <h3 className="footer-heading text-uppercase">
                                Our Services
                            </h3>
                            <div className="small-line"></div>
                              <div className="container px-0 footer-link">
                                <ul>
                                    <li>Study SAT</li>
                                    <li>Study IELTS</li>
                                    <li>Study TOEFL</li>
                                    <li>Study PTE</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col mt-3">
                            <h3 className="footer-heading text-uppercase">
                                Get in Touch
                            </h3>
                            <div className="small-line"></div>
                            <div className="container mt-4 px-0">
                                <div className="social-links d-flex justify-content-center">
                                    <i class="bi bi-facebook text-white"></i>
                                    <i class="bi bi-whatsapp text-white"></i>
                                    <i class="bi bi-tiktok text-white"></i>
                                </div>
                            </div>
                            <div className="location-links d-flex text-white mt-4">
                                <span class="material-symbols-outlined filled me-2">
                                    location_on
                                </span>
                                <div className="">
                                    <div className="fw-bold">MOTIF EDUCATION ABROAD PVT. LTD.</div>
                                    <p>5th Floor, OMKAR BUILDING, New Baneshwor, Ward No 10, Kathmandu, Nepal</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="copyright-container text-white mt-5 d-flex justify-content-center">
                            <div className="container text-center mx-auto px-0">
                                Copyright © Motif Education Abroad Pvt. Ltd. 2022. All rights reserved.<br></br>
                                Powered By <span><a className="text-white text-decoration-none" href="">Elscript Technology Pvt.Ltd</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;