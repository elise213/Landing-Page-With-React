import React from "react";

const Jumbotron = () => {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid mx-2">
        <div class="jumbotron-container w-100 px-4 pb-5" style={{background: "lightcyan"}}> 
          <h1 class="display-4">A Warm Welcome!</h1>
          <h4 class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste nesciunt ut tempora atque, maiores porro fuga iure modi, suscipit saepe sapiente. Magni laudantium, expedita molestias ratione eaque.
          </h4>
          <a href="#" class="btn btn-primary rounded-0">
            Call to Action!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
