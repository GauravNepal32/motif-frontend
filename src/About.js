import React from 'react'
import landingImg from "./images/homepage/about-us.jpg"
import ceoImg from './images/homepage/ceo.png'
import contactImg from './images/homepage/contact.jpg'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className="main-container mt-5">
                <div className="about-us-landing-container mb-100">
                    <div className="about-us-landing-text container">
                        <div className="row row-cols-md-2 row-cols-1">
                            <div className="col">
                                <h1 className='about-heading'>
                                    Our mission to <br /> support students <br /> achieving their goals.
                                </h1>
                            </div>
                            <div className="col d-flex align-items-end">
                                <div className="">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veritatis qui eveniet vero, natus quasi est ipsum earum expedita eos esse nemo incidunt optio minus?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-ts-landing-image mt-5">
                        <img className='img-fluid' src={landingImg} alt="" />
                    </div>
                </div>
                <div className="about-team-container">
                    <div className="container">
                        <div className="hr"></div>
                        <div className="about-team-text my-5 py-5">
                            {/* <div className="row row-cols-2 mb-100">
                                <div className="col d-flex align-items-center">
                                    <h1 className='about-heading my-auto'>Always there for Students</h1>
                                </div>
                                <div className="col">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam a nihil asperiores aspernatur molestiae neque officiis ratione ea dolorum, ab excepturi inventore id deleniti pariatur. Blanditiis dolores fugit illo sed.</p>
                                </div>
                            </div> */}
                            <div className="row ceo-text-container row-cols-md-2 row-cols-1">
                                <div className="col">
                                    <div className="container ceo-image-container">
                                        <div className="d-flex">
                                            <div className="avatar-image-container ceo-img-avtar">
                                                <img className="avatar-img img-fluid" src={ceoImg} alt="" />
                                            </div>
                                            <div className="avatar-info-container ms-5">
                                                <div className="avatar-name-container">
                                                    <h5 className="primary-color fw-bold">Umesh Pandey</h5>
                                                </div>
                                                <div className="avatar-country-container primary-color">
                                                    CEO
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mt-5 mt-md-0 ceo-text">
                                    <h2 className="ceo-text-paragraph">
                                        “The secret to change is focusing all your energy, not on fighting the old, but on building the new." - Socrates
                                    </h2>
                                    <p className='mt-5'>
                                        Educational consultants have often been accused of being impersonal towards students and considering them as business and nothing more. I wanted to change it and empower students so that they could transform into upstanding global citizens and better humans for the future. This zeal is what lead to foundation of MOTIF and it is the very same zeal that keeps us as the industry leaders, going strong in our 12th year.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hr"></div>
                    </div>
                </div>
                <div className="company-stats-container container mb-100 mt-5 pt-5">
                    <div className="d-flex flex-wrap container justify-content-evenly">
                        <div className="stats-child-container">
                            <div className="stats-small-text secondary-color">
                                We have all qualified and professional team member
                            </div>
                            <div className="stats-big-text text-center mt-3 primary-color">30+</div>
                        </div>
                        <div className="stats-child-container">
                            <div className="stats-small-text secondary-color">
                                Learning new things every years
                            </div>
                            <div className="stats-big-text text-center mt-3 primary-color">12+</div>
                        </div>
                        <div className="stats-child-container">
                            <div className="stats-small-text secondary-color">
                                Always creating statisfied student
                            </div>
                            <div className="stats-big-text text-center mt-3 primary-color">3000+</div>
                        </div>
                    </div>
                </div>
                <div className="team-container mb-100">
                    <div className="small-heading text-center">Team</div>
                    <div className="big-heading text-center">Meet our team</div>
                    <div className="container d-flex justify-content-evenly flex-wrap mt-5">
                        <div className="team-child-container d-flex align-items-center">
                            <div className="team-img-container">
                                <img className='img-fluid' src={ceoImg} alt="" />
                            </div>
                            <div className="team-child-info ps-3">
                                <div className="team-name-container fw-bold">
                                    Umesh Pandey
                                </div>
                                <div className="team-position-container">CEO</div>
                            </div>
                        </div>
                        <div className="team-child-container d-flex align-items-center">
                            <div className="team-img-container">
                                <img className='img-fluid' src={ceoImg} alt="" />
                            </div>
                            <div className="team-child-info ps-3">
                                <div className="team-name-container fw-bold">
                                    Umesh Pandey
                                </div>
                                <div className="team-position-container">CEO</div>
                            </div>
                        </div>
                        <div className="team-child-container d-flex align-items-center">
                            <div className="team-img-container">
                                <img className='img-fluid' src={ceoImg} alt="" />
                            </div>
                            <div className="team-child-info ps-3">
                                <div className="team-name-container fw-bold">
                                    Umesh Pandey
                                </div>
                                <div className="team-position-container">CEO</div>
                            </div>
                        </div>
                        <div className="team-child-container d-flex align-items-center">
                            <div className="team-img-container">
                                <img className='img-fluid' src={ceoImg} alt="" />
                            </div>
                            <div className="team-child-info ps-3">
                                <div className="team-name-container fw-bold">
                                    Umesh Pandey
                                </div>
                                <div className="team-position-container">CEO</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-redirect-container">
                    <div className="container text-white py-5">
                        <div className="row row-cols-md-2 row-cols-1">
                            <div className="col d-flex align-items-center justify-content-center">
                                <div className="">
                                    <h1>Having a Problem?</h1>
                                    <h1>Our team is happy to assists you</h1>
                                    <Link className='btn mt-5' to="/contact">Contact Us</Link>
                                </div>
                            </div>

                            <div className="col mt-md-0 mt-4">
                                <div className="contact-img-container">
                                    <img className='img-fluid' src={contactImg} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About