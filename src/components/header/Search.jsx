import React from 'react'
import { useNavigate, Link} from 'react-router-dom'
import './search.css'
const Search = () => {
  const navigate= useNavigate()
  return (
    <div>
      {/* left side */}
      <div className="search_bar">
        <div className="logo">
          <h1>Midevogue</h1>
        </div>
        <input
          type="text"
          className="input_search"
          
          placeholder="Search and hit enter..."
        />
        <span className="icon">
          <ion-icon name="search-outline" className="i"></ion-icon>
        </span>
        {/* <a href="#"> */}
          <div className="dd_boxmenu2">
            All Category{" "}
            {/* <i class="fa-solid fa-caret-down fa-xs">
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </i> */}
          </div>
        {/* </a> */}

        {/* rightside */}
        <div className="s-profile_icon" onClick={()=> navigate ('Account')} > 
        <i class="fa-solid fa-user"></i>

        </div>
        <div className="s-cart_icon"> 
        <Link to='/Cart' className='cart_link'><i class="fa-solid fa-cart-shopping"></i></Link>
        

        </div>

      </div>
    </div>
  )
}

export default Search