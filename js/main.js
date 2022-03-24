"use strict";


renderHTML()

function renderHTML() {
    let html = "";
    html +=
        `
<div class="main row">
<h1 class="main-header col-12">chris_eliason</h1>
</div>
<div class="sub row">
<h6 class="sub-header col-9">full-stack developer</h6>
</div>
<hr class="me-3" style="width: 100%">
<ul class="nav sticky-top justify-content-center">
  <li class="nav-item">
    <a class="nav-link" href="#projects">projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#aboutme">about</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">contact</a>
  </li>
</ul>
<hr class="me-3" style="width: 100%">
<div class="intro me-3" style="font-size: 10px">
<p>here on this page you will be able to view some of my work</p>
<p>please contact me with any questions you may have and enjoy your stay</p>
</div>
<br>
<section id="projects" class="projects">
<div class="card me-3">
  <div class="card-body" style="background-color: #749280">
    <h5 class="card-title text-center">Weather Map</h5>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/weathermap1.png" class="d-block w-100" alt="weather map project">
    </div>
    <div class="carousel-item">
      <img src="../assets/weathermap2.png" class="d-block w-100" alt="weather map project">
    </div>
    <div class="carousel-item">
      <img src="../assets/weathermap3.png" class="d-block w-100" alt="weather map project">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <p class="card-text">This was my first solo project!</p>
    <a href="#" class="btn" style="background-color: #749280">Check it out here!</a>
  </div>
</div>
<br>
<div class="card me-3">
  <div class="card-body" style="background-color: #749280">
    <h5 class="card-title text-center">Coffee Project</h5>
    <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/cof1.png" class="d-block w-100" alt="coffee project">
    </div>
    <div class="carousel-item">
      <img src="../assets/cof2.png" class="d-block w-100" alt="coffee project">
    </div>
    <div class="carousel-item">
      <img src="../assets/cof3.png" class="d-block w-100" alt="coffee project">
    </div>
    <div class="carousel-item">
      <img src="../assets/cof4.png" class="d-block w-100" alt="coffee project">
    </div>
    <div class="carousel-item">
      <img src="../assets/cof5.png" class="d-block w-100" alt="coffee project">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <p class="card-text">A really fun group project!</p>
    <a href="https://james-chris-mark.github.io/coffee-project/" target="_blank" class="btn" style="background-color: #749280">Check it out here!</a>
  </div>
</div>
<br>
<!--insert new project gallery here-->
</section>
<section id="aboutme" class="aboutme">
<div>
<p>my name is chris eliason</p>
<p>i live in ft worth, tx</p>
<p></p>
</div>
</section>



`
    $('#body').html(html)
    $('#menu').on('click', function(e){
        e.preventDefault();
        $('.btngrp').toggleClass('hide');
    });



}
