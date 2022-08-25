import React, { useState,useEffect } from "react";
import axios from "axios";
import { useGlobal } from "./global/baseURL";
import clientImg from "./images/clients/43.png"

const Testimonials = () => {
    const [activeTestimonials, setActiveTestimonials] = useState()
    const [allTestimonials,setAllTestimonials]=useState();
    const [renderApp,setRenderApp]=useState(false);
    const global=useGlobal();
    const loadData =async ()=>{
        try{
            const response=await axios.get(`${global.baseURL}/api/get-testimonials`)
            setActiveTestimonials(response.data.data[0].id)
            setAllTestimonials(response.data.data);
            setRenderApp(true);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
loadData()
    },[])

    return (
        <>
        {renderApp &&
        <div className="container">
                <div className="row row-cols-md-2 row-cols-1 px-0">
                    <div className="col">
                        <div className="testimonials-heading-container">
                            <div className="big-heading text-center">What our client says?</div>
                        </div>
                        <div className="testimonials-avtar-container py-5">
                              {
                            allTestimonials.map((testimonial,index)=>(
                                <div onClick={() => {
                                setActiveTestimonials(testimonial.id)
                            }} className={activeTestimonials === testimonial.id ? "avtar-child-container mb-3 d-flex active-avtar-child-container" : "avtar-child-container mb-3 d-flex"}>
                                <div className="avatar-image-container">
                                    <img className="avatar-img img-fluid" src={clientImg} alt="" />
                                </div>
                                <div className="avatar-info-container ms-5">
                                    <div className="avatar-name-container">
                                        <h5 className="primary-color fw-bold">{testimonial.name}</h5>
                                    </div>
                                    <div className="avatar-country-container primary-color">
                                        {testimonial.country}
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className="col px-5">
                        <h5 className="small-heading text-start">Testimonials</h5>
                        {allTestimonials.map((testimonial,index)=>(
                            <>

                            { testimonial.id===activeTestimonials &&

                            <div className="testimonoals-text-container mt-5">
                                <p>{testimonial.description}</p>
                            </div>
                            }
                            </>
                        ))}
                    </div>
                </div>
            </div>
         }

        </>
    );
}

export default Testimonials;