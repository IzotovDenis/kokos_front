import React, { Component } from "react";
import Slider from "react-slick";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
// import styles from './ItemImage.css'
// import noimage from '../assets/images/noimage.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const ItemImage = props => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const { images } = props.item;
  return (
    <>
      <div className={"slider"}>
        <Slider {...settings}>
          {images.length > 0 &&
            images.map((image, index) => {
              return (
                <div className={"container"}>
                  <div className={"wrapper"}>
                    <img
                      className={"image"}
                      src={`${publicRuntimeConfig.appHost}${image.url}`}
                    />
                  </div>
                </div>
              );
            })}
          {images.length === 0 && <img src={noimage} />}
        </Slider>
      </div>
      <style jsx>{`
        .slider {
          width: 100%;
        }
        .container {
          width: 100%;
          padding-top: 100%;
          position: relative;
          background: #fff;
        }
        .wrapper {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .wrapper:active {
          outline: none;
        }
        .wrapper:focus {
          outline: none;
        }
        .image {
          max-width: 100%;
          max-height: 100%;
        }
      `}</style>
    </>
  );
};

export default ItemImage;
