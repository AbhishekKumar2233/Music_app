import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "rgba(0,0,0,1)" }}
      onClick={onClick}
    />
  );
}

export default function SliderItem() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    autoplaySpeed: 100,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <Slider {...settings} className="slider">
        <div id="div">
          <img
            src="https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/620357bbe4ab4748300ef040/BANNER_1293525908732763.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/620357bbe4ab4748300ef040/BANNER_1293525908732763.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/620357bbe4ab4748300ef040/BANNER_1293525908732763.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/620357bbe4ab4748300ef040/BANNER_1293525908732763.jpg"
            alt=""
          />
        </div>
      </Slider>
      {/* <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
    </div>
  );
}
