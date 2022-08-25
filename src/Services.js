import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import examImg from './images/homepage/toefls.jpeg'
import serviceImg from './images/homepage/about-us.jpg'
import axios from 'axios'

const Services = () => {
    const [testCourse, setTestCourse] = useState();
    const [renderApp, setRenderApp] = useState(false);
    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:5500/api/get-courses")
            console.log(response.data.data)
            setTestCourse(response.data.data)
            setRenderApp(true)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadData();
    }, [])
    return (
        <div>
            {
                renderApp && <>
                    <div className="main-container my-5">
                        <div className="big-heading text-center">
                            Our Services
                        </div>
                        <div className="services-landing-container container mb-100">
                            <div className="row row-cols-md-2 row-cols-1">
                                <div className="col order-md-0 order-1 d-flex align-items-center mt-5">
                                    <div className="">

                                        <div className="small-heading">Lorem ipsum dolor sit.</div>
                                        <div className="big-heading">Lorem ipsum dolor sit amet.</div>
                                    </div>
                                </div>
                                <div className="col order-md-1 order-0 mt-5">
                                    <div className="service-landing-img">
                                        <img src={serviceImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="stick-container">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="test-preparation-container py-5 grey-container mb-100">
                            <div className="services-container">
                                <div className="container">
                                    <h5 className="small-heading text-center">Category</h5>
                                    <div className="big-heading text-center">Our Popular Courses</div>
                                    <div className="test-prep-container mt-5">
                                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 px-0">
                                            {console.log(testCourse)}
                                            {testCourse.map((test) => (
                                                <div key={test.id} className="col">
                                                    <div className="card">
                                                        <div className="card-img">
                                                            <img className="img-fluid" src={examImg} alt="" />
                                                        </div>
                                                        <div className="card-heading mt-4">{test.name}</div>
                                                        <p className="mt-3">{test.description}</p>
                                                        <div className="text-end">
                                                            <button className="btn">
                                                                <div className="color-icons">
                                                                    <span class="material-symbols-outlined">
                                                                        arrow_forward
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="all-services-container mb-100">
                            <div className="big-heading text-center">
                                All Services Under One Roof
                            </div>
                            <div className="services-child-wrapper mt-5">
                                <div className="container d-flex justify-content-md-between justify-content-center  flex-wrap">
                                    <div className="service-child-container mt-3 mt-md-0">
                                        <div className="service-color-icon-container mx-auto text-center">
                                            <i class="bi bi-pass-fill"></i>
                                        </div>
                                        <div className="service-heading my-3 text-center">
                                            VISA Processing
                                        </div>
                                        <div className="service-description-container text-center">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, suscipit modi! Doloribus, modi esse, reiciendis aliquid iste distinctio, officiis aut optio repellendus dolor voluptas enim?
                                        </div>
                                    </div>
                                    <div className="service-child-container mt-3 mt-md-0">
                                        <div className="service-color-icon-container mx-auto text-center">
                                            <i class="bi bi-pass-fill"></i>
                                        </div>
                                        <div className="service-heading my-3 text-center">
                                            VISA Processing
                                        </div>
                                        <div className="service-description-container text-center">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, suscipit modi! Doloribus, modi esse, reiciendis aliquid iste distinctio, officiis aut optio repellendus dolor voluptas enim?
                                        </div>
                                    </div>
                                    <div className="service-child-container mt-3 mt-md-0">
                                        <div className="service-color-icon-container mx-auto text-center">
                                            <i class="bi bi-pass-fill"></i>
                                        </div>
                                        <div className="service-heading my-3 text-center">
                                            VISA Processing
                                        </div>
                                        <div className="service-description-container text-center">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, suscipit modi! Doloribus, modi esse, reiciendis aliquid iste distinctio, officiis aut optio repellendus dolor voluptas enim?
                                        </div>
                                    </div>
                                    <div className="service-child-container mt-3 mt-md-0">
                                        <div className="service-color-icon-container mx-auto text-center">
                                            <i class="bi bi-pass-fill"></i>
                                        </div>
                                        <div className="service-heading my-3 text-center">
                                            VISA Processing
                                        </div>
                                        <div className="service-description-container text-center">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, suscipit modi! Doloribus, modi esse, reiciendis aliquid iste distinctio, officiis aut optio repellendus dolor voluptas enim?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scholarship-container container">
                            <div className="row row-cols-2">
                                <div className="col">
                                    <div className="big-heading">
                                        Awesome Scholarships available with our partners
                                    </div>
                                    <div className="mt-5 d-flex align-items-center">
                                        <Link to="/partner" className="redirect-link btn-type-1 text-decoration-none d-flex">
                                            <div className="">
                                                View Partner
                                            </div>
                                            <span class="material-symbols-outlined my-auto">
                                                double_arrow
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col">

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Services