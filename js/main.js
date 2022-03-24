"use strict";


renderHTML()

function renderHTML() {
    let html = "";
    html +=
        `
<nav1 class="navbar sticky-top navbar-expand-lg navbar-light d-block d-sm-none" style="background-color: #9f9f95">
  <div class="container-fluid">
  <div class="main row">
<h2 class="main-header me-3 sticky-top">chris_eliason</h2>
</div>
    <h6 class="sub-header">full-stack developer</h6>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link gallery" href="#">projects</a>
        <a class="nav-link about" href="#">about</a>
        <a class="nav-link contact" href="#">contact</a>
      </div>
    </div>
  </div>
</nav1>
<nav2>
<div class="small-break d-none d-sm-block d-md-none">
<div class="main row">
<h2 class="main-header me-3">chris_eliason</h2>
</div>
<div class="sub">
<h6 class="sub-header">full-stack developer</h6>
</div>
<hr class="me-3" style="width: 100%">
<ul class="nav sticky-top justify-content-start">
  <li class="nav-item">
    <a class="nav-link gallery ps-0">projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link about">about</a>
  </li>
  <li class="nav-item">
    <a class="nav-link contact">contact</a>
  </li>
</ul>
</div>
</nav2>
<nav3 class="navbar navbar-expand-lg navbar-light d-none d-md-block .d-lg-none" style="background-color: #9f9f95">
  <div class="container-fluid">
    <h1 class="head-header">chris_eliason</h1>
    <h6 class="sub-header ps-5 pt-3 d-flex align-self-center">full-stack developer</h6>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link gallery" href="#">Projects</a>
        <a class="nav-link about" href="#">About</a>
        <a class="nav-link contact" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav3>

<hr class="me-3" style="width: 100%">
<br>
<section id="projects" class="hide">
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
    <a href="https://github.com/nosaile/codeup-web-exercises" target="_blank" class="btn" style="background-color: #749280">Check it out here!</a>
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
<section id="aboutme" class="aboutme hide">
<div>
<p>my name is chris eliason</p>
<p>i live in ft worth, tx</p>
<p>i enjoy spending time outdoors on my bike riding trails, and along the trinity river</p>
</div>
</section>
<section id="contact" class="hide">
<div class="card me-3">
  <div class="card-header text-center text-dark">
    Let's Connect!
  </div>
  <ul class="list-group text-center list-group-flush">
    <li class="list-group-item"><a class="github_link" href="https://github.com/nosaile" target="_blank">github</a></li>
    <li class="list-group-item"><a class="linkedin_link" href="https://www.linkedin.com/in/christopher-eliason-3649b4231/" target="_blank">LinkedIn</a></li>
    <li class="list-group-item">eliason.chris1@gmail.com</li>
  </ul>
</div>
</section>



`
    $('#body').html(html)


    $('.about').on('click', function (e) {
        e.preventDefault();
        $('.aboutme').toggleClass('hide');
    });

    $('.gallery').on('click', function (e) {
        e.preventDefault();
        $('#projects').toggleClass('hide');
    });

    $('.contact').on('click', function (e) {
        e.preventDefault();
        $('#contact').toggleClass('hide');
    });
}
