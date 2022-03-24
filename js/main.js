"use strict";


renderHTML()

function renderHTML() {
    let html = "";
    html +=
        `
<div class="main row">
<h1 class="main-header col-7" style="text-align: left">chris_eliason</h1>
</div>
<div class="sub row">
<h6 class="sub-header col-6" style="text-align: start">full-stack developer</h6>
</div>
<div class="btngrp me-5 row">
<div class="col-4">
<button id="gallery-btn">projects</button>
<p id="gallery" class="gallery" style="display: none">on this page you can browse some of my work</p>
</div>
<div class="col-4">
<button id="about-btn">about</button>
<p id="about" class="about" style="display: none">get to know me</p>
</div>
<div class="col-4">
<button id="contact-btn">contact</button>
<p id="contact" class="contact" style="display: none">if you like what you see or have any questions, feel free to contact me though the following ways</p>
</div>
</div>
<hr class="me-3">
<div class="intro me-3" style="font-size: 10px">
<p>here on this page you will be able to view some of my work</p>
<p>please contact me with any questions you may have and enjoy your stay</p>
</div>
<br>
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
<hr>
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
    <p class="card-text">This was a group project I participated in.</p>
    <a href="#" class="btn" style="background-color: #749280">Check it out here!</a>
  </div>
</div>




`
    $('#body').html(html)
    $('#menu').on('click', function(e){
        e.preventDefault();
        $('.btngrp').toggleClass('hide');
    });



}
