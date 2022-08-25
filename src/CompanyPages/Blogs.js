import React from 'react'
import blogImg from '../images/blog/blog.jpeg'
const Blogs = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="blogs-container">
                    <div className="blog-child-container mx-auto big-blog blog-post-1">
                        <div className="blog-thumbnail-container">
                            <img className='img-fluid' src={blogImg} alt="" />
                        </div>
                        <div className="blog-content-container">
                            <div className="blog-author-container mt-4 d-flex justify-content-between">
                                <div className="author-name  d-flex align-items-center">
                                    <span class="material-symbols-outlined me-2">
                                        person
                                    </span>
                                    John Smith</div>
                                <div className="min-read-container d-flex align-items-center ">
                                    <span class="material-symbols-outlined me-2">
                                        schedule
                                    </span>
                                    5 mins read</div>
                            </div>
                            <div className="blog-preview-container mt-5">
                                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio facilis est quam cupiditate dolor delectus, excepturi maiores et quaerat dolorum....</p>
                            </div>
                        </div>
                    </div>
                    <div className="small-blog-container d-flex flex-wrap justify-content-evenly">
                        <div className="blog-child-container  small-blog blog-post-1">
                            <div className="blog-thumbnail-container">
                                <img className='img-fluid' src={blogImg} alt="" />
                            </div>
                            <div className="blog-content-container">
                                <div className="blog-author-container mt-4 d-flex justify-content-between">
                                    <div className="author-name  d-flex align-items-center">
                                        <span class="material-symbols-outlined me-2">
                                            person
                                        </span>
                                        John Smith</div>
                                    <div className="min-read-container d-flex align-items-center ">
                                        <span class="material-symbols-outlined me-2">
                                            schedule
                                        </span>
                                        5 mins read</div>
                                </div>
                                <div className="blog-preview-container mt-5">
                                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio facilis est quam cupiditate dolor delectus, excepturi maiores et quaerat dolorum....</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-child-container  small-blog blog-post-1">
                            <div className="blog-thumbnail-container">
                                <img className='img-fluid' src={blogImg} alt="" />
                            </div>
                            <div className="blog-content-container">
                                <div className="blog-author-container mt-4 d-flex justify-content-between">
                                    <div className="author-name  d-flex align-items-center">
                                        <span class="material-symbols-outlined me-2">
                                            person
                                        </span>
                                        John Smith</div>
                                    <div className="min-read-container d-flex align-items-center ">
                                        <span class="material-symbols-outlined me-2">
                                            schedule
                                        </span>
                                        5 mins read</div>
                                </div>
                                <div className="blog-preview-container mt-5">
                                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio facilis est quam cupiditate dolor delectus, excepturi maiores et quaerat dolorum....</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog-child-container  small-blog blog-post-1">
                            <div className="blog-thumbnail-container">
                                <img className='img-fluid' src={blogImg} alt="" />
                            </div>
                            <div className="blog-content-container">
                                <div className="blog-author-container mt-4 d-flex justify-content-between">
                                    <div className="author-name  d-flex align-items-center">
                                        <span class="material-symbols-outlined me-2">
                                            person
                                        </span>
                                        John Smith</div>
                                    <div className="min-read-container d-flex align-items-center ">
                                        <span class="material-symbols-outlined me-2">
                                            schedule
                                        </span>
                                        5 mins read</div>
                                </div>
                                <div className="blog-preview-container mt-5">
                                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio facilis est quam cupiditate dolor delectus, excepturi maiores et quaerat dolorum....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs