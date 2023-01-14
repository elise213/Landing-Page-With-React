import React from "react";
import pic from "../../img/download.png";

const Card = (props) => {
  return (
    <div className="card mx-2 border-0" style={{ width: "18rem" }}>
      <img src={pic} class="card-img-top rounded-0" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center p-2">{props.title}</h5>
        <p className="card-text text-center">{props.text}</p>
      </div>
      <div class="card-footer mx-auto border-0">
        <a href="#" className="btn btn-primary rounded-0">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

export default Card;
