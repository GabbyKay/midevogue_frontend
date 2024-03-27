import React from 'react'
import './home.css'
import './background.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive2,} from "../data";
const backgroundimage = () => {
  const pStyle = {
    color: "white",
    fontSize: "16px",
  };

  return (
    <div>
      <Carousel 
      additionalTransfrom={0}
       showDots={true}
      arrows
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive2}>
        <div>
            <img src="./images/homebg8.jpg" alt="" id="hero_img" />
            <div className="bg_img_desc">
              <h1 className="discount">Discount 
              at 50% </h1>
              <span style={pStyle}>
                <button className="order_now">Order Now!</button>{" "}
              </span>
            </div>
          </div>

          <div>
            <img src="https://images.pexels.com/photos/949590/pexels-photo-949590.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" id="hero_img" />
            <div className="bg_img_desc">
              <h1 className="discount">Discount at 50% </h1>
              <span style={pStyle}>
                <button className="order_now">Order Now!</button>{" "}
              </span>
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1583937443325-97becde478a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMzfHxqZXdlbHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" id="hero_img" />
            <div className="bg_img_desc">
              <h1 className="discount">Discount at 50% </h1>
              <span style={pStyle}>
                <button className="order_now">Order Now!</button>{" "}
              </span>
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1627293501081-a1f856f447b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxqZXdlbHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" id="hero_img" />
            <div className="bg_img_desc">
              <h1 className="discount">Discount at 50% </h1>
              <span style={pStyle}>
                <button className="order_now">Order Now!</button>{" "}
              </span>
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1620891203092-971780cc3703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGpld2Vscnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" id="hero_img5" />
            <div className="bg_img_desc">
              <h1 className="discount">Discount at 50% </h1>
              <span style={pStyle}>
                <button className="order_now">Order Now!</button>{" "}
              </span>
            </div>
          </div>
        </Carousel>
    </div>
  )
}

export default backgroundimage