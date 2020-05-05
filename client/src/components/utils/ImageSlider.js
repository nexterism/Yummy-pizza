import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                }}
                src={`http://localhost:5000/${image}`}
                alt="productImage"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
