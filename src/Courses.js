import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import contactImg from './images/homepage/contact.jpg'
import axios from 'axios'
import { useGlobal } from './global/baseURL'

const Courses = () => {
    const id=useParams().id;
    const [courses,setCourses]=useState([]);
    const global=useGlobal();

    const loadData=async()=>{
        try{
            const response=await axios.get(`${global.baseURL}/api/get-courses/${id}`)
            setCourses(response.data.data[0])
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        loadData();
    },[])
    return (
        <>
        {courses.length!==null &&
         <div>
            <div className="bread-crumb-container">
                <div className="container mt-5">
                    <nav aria-label="breadcrumb">
                        {console.log(courses)}
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a className='primary-color text-decoration-none' href="#">Home</a></li>
                            <li class="breadcrumb-item"><a className='primary-color text-decoration-none' href="#">Courses</a></li>
                            <li class="breadcrumb-item active secondary-color" aria-current="page">{courses.name}</li>
                        </ol>
                    </nav>
                </div>

            </div>
            <div className="courses-single-container">
                <div className="container">
                    <h1 className="big-heading mt-5">{courses.name}</h1>
                    <h1 className='mt-3'>Why Study {courses.name}?</h1>
                    <div className="container d-flex">
                        <div className="courses-highlight-container mt-5">

                            <ul className='courses-highlight-list list-unstyled'>
                                <li className='d-flex align-items-center'><div className="icon-container me-3">
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                </div>If you have successfully taken an IELTS test, you are able to apply to study at many international schools, universities, and also can satisfy English language requirements of foreign employers, immigration authorities and professional bodies. So, IELTS is useful not only for study abroad but for all steps of life.<div className="course-description-list"></div></li>
                                <li className='d-flex align-items-center'><div className="icon-container me-3">
                                    <span class="material-symbols-outlined">
                                        done
                                    </span>
                                </div>If you have successfully taken an IELTS test, you are able to apply to study at many international schools, universities, and also can satisfy English language requirements of foreign employers, immigration authorities and professional bodies. So, IELTS is useful not only for study abroad but for all steps of life.<div className="course-description-list"></div></li>

                            </ul>
                            <div className="contact-redirect-container courses-redirect rounded mt-5">
                                <div className="container text-white py-5">
                                    <div className="row row-cols-1">
                                        <div className="col d-flex align-items-center ms-4">
                                            <div className="">
                                                <h1>Having a Problem?</h1>
                                                <h1>Our team is happy to assists you</h1>
                                                <Link className='btn mt-5' to="/contact">Contact Us</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="container d-md-flex d-none justify-content-end">
                            <div className="courses-single-side-container">
                                <h6 className="secondary-color text-center">SIMILAR COURSES</h6>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        }
        </>

    )
}

export default Courses