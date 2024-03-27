import React from "react";
import Head from "../../header/Head";
import Navbar from "../../header/Navbar";
import Search from "../../header/Search";
import "./home.css";
import "./newarrival.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  style,
  productData,
  responsive,
  responsive2,
  blankStyle,
  productData2,
  backgroundImage,
} from "../data";
import Product from "../product";
import Backgroundimage from "../Background/backgroundimage";
import Footer from "../../footer/Footer";
// import { productData2 } from "./data";

const products = productData.map((item) => (
  <Product name={item.name} url={item.imgurl} price={item.price} />
));

const products2 = productData2.map((item) => (
  <Product name={item.name} url={item.imgurl} price={item.price} />
));

// const backgroundImages = backgroundImage.map((item) => (
//   <Backgroundimage url={item.url} />
// ));

const Home = () => {
  return (
    <div>
      <Head />
      <Search />
      <Navbar />
      <div className="home_img">
        <Backgroundimage />
        {/* new arrivals section  */}
        <div className="NewArrivals">
          <div className="head_txt">
            <h1 className="head--text">New Arrivals</h1>
            <span>
              <b>Just in now</b>
            </span>
          </div>
          <div className="carousel" style={style}>
            <Carousel
              additionalTransfrom={0}
              //  showDots={true}
              arrows
              autoPlay
              autoPlaySpeed={3000}
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
              // autoPlay={
              //   this.props.deviceType !== "superLargeDesktop" ? true : false
              // }
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={500}
              responsive={responsive}
            >
              {products}
            </Carousel>
          </div>
          <br />
          <br />
          <div className="head_blank">
            <div className="blank_card">
              <img src="https://images.pexels.com/photos/932405/pexels-photo-932405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img src="./images/model.jpg" alt="" />
              <img src="./images/vogue.jpg" alt="" />
              <img src="https://images.pexels.com/photos/852858/pexels-photo-852858.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

          </div>

          {/* formen section */}
          <div className="formen">
            <div className="carousel" style={blankStyle}>
              <Carousel
                swipeable={true}
                // showDots={true}
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
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
                renderDotsOutside={true}
                responsive={responsive}
              >
                {products2}
              </Carousel>
            </div>
          </div>

          {/* about page section */}

          <div className="home_about">
            <div className="home_about_txt">
              <h2 className="home_about_h1">Midevogue</h2>
              <p>
                {" "}
                At Midevogue, we offer a stunning collection of exquisite and
                unique jewelry pieces to add a touch of glamour and elegance to
                your everyday look. From sparkling diamonds to precious
                gemstones, our hand-selected pieces are crafted to perfection to
                suit every taste and style.
              </p>

              {/* social section */}
              <div className="social_links">
                <ul class="social-icons">
                  <li>
                    <a
                      class="icon-fallback-text twitt hexagon"
                      target="blank"
                      href="#"
                      title="Twitter"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      class="icon-fallback-text fb hexagon"
                      target="blank"
                      href="#"
                      title="Facebook"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      class="icon-fallback-text pin hexagon"
                      target="blank"
                      href="#"
                      title="Pinterest"
                    >
                      <i class="fa-brands fa-pinterest"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      class="icon-fallback-text ins"
                      target="blank"
                      href="#"
                      title="Instagram"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
