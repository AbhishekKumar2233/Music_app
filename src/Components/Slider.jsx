import React from "react";
import Slider from "react-slick";

export default function SliderItem() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings} className="slider">
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
