import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import './head.css'
import FAQ from './FAQ/FAQ';
const Head = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  
  return (
    <div>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left_row'>
            <i className='fa fa-phone'></i>
            <label> +2348146079030</label>
            <i className='fa fa-envelope'></i>
            <label>Midevogueofficial@gmail.com</label>
          </div>
          {/* right side */}
          <div className='right_row_RText'>
            <label>
            <Link to="/FAQ" className='faq_link' >
              FAQ </Link>
             </label>
            <label>
              <Link to='/Needhelp' className='Needhelp_link'>
                Need Help?</Link>
              </label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Head