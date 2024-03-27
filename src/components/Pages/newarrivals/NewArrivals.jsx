import React from "react";
import "./newarrival.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { style, productData, responsive } from "../data";
import Product from "../product";
import Categories from "../allcategories/categories";
import Head from "../../header/Head";

const NewArrivals = () => {

  const products = productData.map((item) => (
    <Product name={item.name} url={item.imgurl} price={item.price} />
  ));

  return (
    <>
    <Head/>
    <div className="NewArrivals" >
      <div className="head_txt">
        <h1 className="head--text">New Arrivals</h1>
        <span>
          <b>Just in now</b>
        </span>
      </div>
      <div className="carousel" style={style}>
        <Carousel autoPlay autoPlaySpeed={3000} infinite responsive={responsive}>{products}</Carousel>
      </div>

      <br />
      <br />
      <br />
     
      <Categories/>
    </div>
    </>
  );
};

export default NewArrivals;
