import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

export default function Card1() {
  return (
    <button className="cardButton">
      <div className="card">
        <img
          src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      </button>
  );
}
