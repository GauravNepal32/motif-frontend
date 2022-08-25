import React from 'react'
import serviceImg from './images/homepage/about-us.jpg'

const Contact = () => {
    return (
        <div>
            <div className="contact-image-container d-flex flex-column align-items-center">
                <div className="container my-auto">
                    <div className="contact-us-landing-container my-auto">
                        <h1 className="text-white">
                            Contact Us
                        </h1>
                        <h6 className='text-white'> Looking for carrer guidance? You found us.</h6>
                    </div>
                    <div className="social-link-container mt-auto">
                        <div className="social-links d-flex">
                            <i class="bi bi-facebook text-white"></i>
                            <i class="bi bi-whatsapp text-white"></i>
                            <i class="bi bi-tiktok text-white"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div className="contact-info-holder">
                <div className="container">
                    <div className="row px-0">
                        <div className="col-md-4 col-12 order-1 order-md-0 mt-5">
                            <div className="big-heading mt-5 .pt-5">
                                What will be the next step?
                            </div>
                            <div className="small-heading mt-3">You are one step closer</div>
                        </div>
                        <div className="col-md-8 col-12 order-0 order-md-1">
                            <div className="contact-form-holder">
                                <div className="form p-5">
                                    <h4 className='primary-color text-center'>Send us a email. We will reach back to you within 24 hours</h4>
                                    <form className='mt-5' action="">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-floating mb-3">
                                                    <input type="text" class="form-control" id="floatingInput" placeholder="First Name" />
                                                    <label for="floatingInput">First Name</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-floating mb-3">
                                                    <input type="text" class="form-control" id="floatingInput" placeholder="Last Name" />
                                                    <label for="floatingInput">Last Name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-floating mb-3">
                                                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
                                                    <label for="floatingInput">Email</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-floating mb-3">
                                                    <input type="text" class="form-control" id="floatingInput" placeholder="Phone Number" />
                                                    <label for="floatingInput">Phone Number</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-floating mb-5">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                            <label for="floatingTextarea">YOUR MESSAGE</label>
                                        </div>
                                        <div className="row">
                                            <input type="submit" className='p-2 btn btn-type-1' value={"SEND"} />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact