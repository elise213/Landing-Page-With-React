import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark  px-4">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Start Bootstrap</a>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-light">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
