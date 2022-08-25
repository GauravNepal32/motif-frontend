
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import companyLogo from './images/partners/bond.png'
import companyLogo2 from "./images/partners/la-trobe.png"

const PartnerSliders = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        centerMode: true,
        pauseOnHover: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src={companyLogo} alt="" />
                </div>
                <div>
                    <img src={companyLogo2} alt="" />
                </div>
                <div>
                    <img src={companyLogo} alt="" />

                </div>
                <div>
                    <img src={companyLogo2} alt="" />

                </div>
                <div>
                    <img src={companyLogo} alt="" />

                </div>
                <div>
                    <img src={companyLogo2} alt="" />

                </div>
            </Slider>
        </>
    );
}

export default PartnerSliders;