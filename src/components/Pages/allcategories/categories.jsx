import React from "react";
import "./categories.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { style, fragranceData, productData, responsive, braceletData, heelsProductData } from "../data";
import Product from "../product";

const categories = () => {
  const products = productData.map((item) => (
    <Product name={item.name} url={item.imgurl} price={item.price} />
  ));

  const fragrance = fragranceData.map((item) => (
    <Product name={item.name} url={item.imgurl} price={item.price} />
  ));

  const bracelet = braceletData.map((item) => (
    <Product name={item.name} url={item.imgurl} price={item.price} />
  ));

  const heels = heelsProductData.map((item) => (
    <Product name={item.name} url={item.imgurl} price={item.price} />
  ));

  return (
    <div className="categories_bg">

{/* heels products and banner section  */}

<div className="head_blank2">
            <div className="blank_card2">
              <img src="https://images.pexels.com/photos/9262827/pexels-photo-9262827.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/7036335/pexels-photo-7036335.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/11189023/pexels-photo-11189023.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/14037542/pexels-photo-14037542.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
          {/* heels carousel sec  */}
      <div className="carouselbg">
        <div className="carousel" style={style}>
          <Carousel autoPlay
              autoPlaySpeed={3000} infinite responsive={responsive}>{heels}</Carousel>
        </div>
      </div>


      {/* fragrance products and banner section */}

      <div className="head_blank2">
            <div className="blank_card2">
              <img src="https://images.pexels.com/photos/8450502/pexels-photo-8450502.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/6863342/pexels-photo-6863342.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/6707155/pexels-photo-6707155.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/1961781/pexels-photo-1961781.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               </div>
          </div>
          {/* fragrance carousel sec  */}
      <div className="carouselbg">
        <div className="carousel" style={style}>
          <Carousel  autoPlay
              autoPlaySpeed={3000} infinite responsive={responsive}>{fragrance}</Carousel>
        </div>
      </div>


            {/* bracelet products section */}
 
      <div className="head_blank2">
            <div className="blank_card2">
              <img src="https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/3536991/pexels-photo-3536991.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="https://images.pexels.com/photos/3410701/pexels-photo-3410701.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
      <div className="carouselbg">
        <div className="carousel" style={style}>
          <Carousel autoPlay
              autoPlaySpeed={3000} infinite responsive={responsive}>{bracelet}</Carousel>
        </div>
      </div>
    </div>
  );
};

export default categories;
