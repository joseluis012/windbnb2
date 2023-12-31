import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "../Casa/House.css"; 

const House = ({ house, handle }) => {
  return (
    <div
      id="home"
      className="home"
      onClick={() => {
        handle(house);
      }}
    >
      <div id="homeImg" className="homeImg">
        <img src={house.photo} alt="House img" />
      </div>

      <div id="homeInfo" className="homeInfo">
        <div id="homeInfoHeader" className="homeInfoHeader">
          {house.superHost && <div className="superHost">SUPER HOST</div>}
          <div className="homeType">{house.type}</div>
          <div className="homeStars">
            <StarIcon style={{ color: `orange
            ` }} /> {house.rating}
          </div>
        </div>

        <h4 className="homeTitle">{house.title}</h4>
      </div>
    </div>
  );
};

export default House;
