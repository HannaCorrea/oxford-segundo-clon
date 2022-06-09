import React from "react";
import BannerImage1 from "../..//Assets/bannerImage.jpg";
import BannerImage2 from "../..//Assets/bannerImage2.jpg";
import BannerImage3 from "../..//Assets/bannerImage3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./bannersCarousel.css";

function BannersCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Slider className="container-banner" {...settings}>
        <img className="banner-image" src={BannerImage1} alt="/" />
        <img className="banner-image" src={BannerImage2} alt="/" />
        <img className="banner-image" src={BannerImage3} alt="/" />
      </Slider>
    </>
  );
}
export default BannersCarousel;
