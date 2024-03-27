import React from "react";
import "./teamcards.css";
const teamcards = () => {
  return (
    <div>
      <div className="team_container">
        <div className="team_img">
          <img src="./images/ceo.jpg" alt="" /> 
        </div>
       
        <div className="team_img">
          <img src="./images/ceo.jpg" alt="" /> 
        </div>
       
        <div className="team_img">
          <img src="./images/ceo.jpg" alt="" /> 
        </div>
       

        <div className="team_img">
          <img src="./images/ceo.jpg" alt="" /> 
        </div>
        <div className="team_info">
          <div className="team_name"><b>Willams Mount</b></div>
          <div className="team_desc">CEO</div>
        </div>
      </div>
    </div>
  );
};

export default teamcards;
