import React,{ useState,useEffect } from "react";
import SearchBox from "./SearchBox";
import landingImg from "./images/homepage/landing2.png"
import examImg from './images/homepage/toefls.jpeg'
import PartnerSliders from "./PartnerSliders";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import ScoreConvertor from "./ScoreConvertor";
import axios from "axios";
import { useGlobal } from "./global/baseURL";
const Home = () => {
    const [advance, setAdvance] = useState(false);
    const [testCourse,setTestCourse]=useState();
    const [renderApp,setRenderApp]=useState(false);
    const global=useGlobal();
    const handleAdvance = () => {
        setAdvance(!advance)
    }

    const loadData=async()=>{
        try{
            const response=await axios.get(`${global.baseURL}/api/get-courses`)
            console.log(response.data.data)
            setTestCourse(response.data.data)
            setRenderApp(true)

        }catch(err){

            console.log(err)
        }
    }
    useEffect(()=>{
        loadData();
    },[])
    return (
        <>
        {
            renderApp && <>
             <div className="px-2 px-md-0">
                {!advance ? (
                    <div className="hero-container container position-relative">
                        <div className="row px-0 my-5 row-cols-md-2 row-cols-1">
                            <div className="col my-auto">
                                <div className="my-auto d-flex align-item-center">
                                    <div className="container px-0">
                                        <h4 className="secondary-color fst-italic fw-bold">
                                            Lorem, ipsum dolor.
                                        </h4>
                                        <h1 className="primary-color fw-bold mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
                                        <p className="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt pariatur ducimus provident. Expedita, quos reprehenderit!</p>
                                    </div>
                                </div>
                                <div className="home-search-box mt-5">
                                    <input type="text" className="form-control keyword-search-box p-2" placeholder="Search..." />
                                    <button className="search-icon btn d-flex justify-content-center align-items-center">
                                        <span className="material-symbols-outlined ">
                                            search
                                        </span>
                                    </button>
                                    <div onClick={handleAdvance} className="advance-search-container">
                                        <p className="advance-search-btn text-center mt-3">Advance Search?</p>
                                    </div>
                                </div>
                                {/* <input type="text" className="form-control mt-5 simple-search-container" /> */}
                            </div>
                            <div className="col landing-image-wrapper">
                                <div className="d-flex justify-content-center">
                                    <img className="img-fluid" src={landingImg} alt="" />
                                </div>
                                {/* <div className="background-color-wrapper"></div>
                                <div className="number-courses d-flex align-items-center">
                                    <div className="color-icons d-flex justify-content-center align-items-center">
                                        <span class="material-symbols-outlined">
                                            school
                                        </span>
                                    </div>
                                    <div className="">
                                        <div className="fw-bold">100+</div>
                                        <p>Scholarship Available</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ) : <SearchBox handleAdvance={handleAdvance} setAdvance={setAdvance} />}
                <div className="grey-container mb-100 pt-5 pb-5">

                    <div className="partners-container mb-100">
                        <div className="container py-5">
                            <PartnerSliders />
                        </div>

                    </div>
                    <div className="services-container">
                        <div className="container">
                            <h5 className="small-heading text-center">Category</h5>
                            <div className="big-heading text-center">Our Popular Courses</div>
                            <div className="test-prep-container mt-5">
                                <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 px-0">
                                    {console.log(testCourse)}
                                    {testCourse.map((test)=>(
                                    <div key={test.id} className="col">
                                        <div className="card">
                                            <div className="card-img">
                                                <img className="img-fluid" src={examImg} alt="" />
                                            </div>
                                            <div className="card-heading mt-4">{test.name}</div>
                                            <p className="mt-3">{test.description}</p>
                                            <div className="text-end">
                                                <Link to="/courses" className="btn">
                                                    <div className="color-icons">
                                                        <span class="material-symbols-outlined">
                                                            arrow_forward
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-us-container mb-100">
                    <div className="container">
                        <div className="row row-cols-md-2 row-cols-1 px-0">
                            <div className="col">
                                <img className="img-fluid" src={landingImg} alt="" />
                            </div>
                            <div className="col">
                                <div className="about-us-text">
                                    <h5 className="small-heading text-center">About Us</h5>
                                    <div className="big-heading text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consequatur?</div>
                                    <p className="mt-4 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam ipsum vel optio qui eaque, neque eveniet quis ea. Maxime fugiat velit iusto at commodi rerum reprehenderit veniam quia quae!</p>
                                </div>
                                <button className="btn contact-pill btn-type-1 mt-4">Learn More</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="score-container d-flex mb-100 justify-content-center py-4">
                   <ScoreConvertor/>
                </div>
                <div className="testimonial-container">
                    <Testimonials />
                </div>
            </div>
            </>
        }

        </>);
}

export default Home;