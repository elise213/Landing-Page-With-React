import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
  return (
    <div className="">
      <NavBar />
	  <div className="site-container mx-5">
      <Jumbotron />

      <div className="card-group pt-3">
        <Card
          title="Sample Title 1"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Card
          title="Sample Title 2"
          text="Tempore, consectetur? Tenetur ratione hic et velit quidem quia amet qui sit."
        />
        <Card
          title="Sample Title 3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Card
          title="Sample Title 4"
          text="Sequi ex harum perferendis officia veniam reiciendis explicabo."
        />
      </div>

      <Footer />
    </div>

	</div>
  );
};

export default Home;
