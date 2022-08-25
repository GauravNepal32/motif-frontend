import { Link } from "react-router-dom";
import companyLogo from "./images/company/motif-logo.png"
import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobal } from "./global/baseURL";
const Navbar = () => {
  const [courses,setCourses]=useState([])
  const global=useGlobal();
  const loadData=async()=>{
    const response=await axios.get(`${global.baseURL}/api/get-courses`)
      setCourses(response.data.data)
  }
  useEffect(()=>{
    loadData()
  },[])
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container py-3">
          <Link class="navbar-brand" to="/">
            <img src={companyLogo} alt="" width="171" height="80" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="material-symbols-outlined">
              menu
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <div className="d-lg-flex mx-lg-auto mt-md-0 mt-5 me-auto">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/about" >About Us</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/services'>Services</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Test Preparation
                   </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {courses.length!==null &&
                      courses.map((course)=>(
                        <li><Link to={`/courses/${course.id}`} class="dropdown-item">{course.name}</Link></li>
                      ))
                    }
                  </ul>
              </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/blogs'>Blogs</Link>
                </li>
                <li class="nav-item contact-pill ps-2 d-lg-none d-block">
                  <a class="nav-link text-white" href="#">Contact Us</a>
                </li>
              </div>
            </ul>
            <li class="nav-item contact-pill d-lg-block d-none">
                  <Link class="nav-link text-white fw-bold" to="/contact">Contact Us</Link>
                </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;