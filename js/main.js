"use strict";
renderHTML()

function renderHTML() {
    let html = "";
    html += `
<nav1 class="navbar sticky-top navbar-expand-lg navbar-light d-block d-sm-none bg-none ps-5 pe-5" style="background-color: #84857b">
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
<div class="small-break sticky-top d-none d-sm-block d-md-none ps-5 pe-5" style="background-color: #84857b">
<div class="main row">
<h2 class="main-header me-3">chris_eliason</h2>
</div>
<div class="sub">
<h6 class="sub-header">full-stack developer</h6>
</div>
<ul class="nav sticky-top justify-content-start" style="background-color: #84857b">
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
<nav3 class="navbar sticky-top navbar-expand-lg navbar-light d-none d-md-block .d-lg-none ps-5 pe-5" style="background-color: #84857b">
  <div class="container-fluid mx-o px-0">
    <h1 class="head-header">chris_eliason</h1>
    <h6 class="sub-header ps-5 pt-3 d-flex align-self-center">full-stack developer</h6>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link gallery" href="#">projects</a>
        <a class="nav-link about" href="#">about</a>
        <a class="nav-link contact" href="#">contact</a>
      </div>
    </div>
  </div>
</nav3>
<br>
<div class="content">
<div class="allmain row justify-content-center">
<section class="col-lg-6 hide" id="projects">
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
    <p class="card-text">This was my first solo project! I was tasked with creating a weather app that had a range of functionality. It includes a search function, custom location pin, and a drag and drop pin.
    It updates the weather based off of where the pin is located on the map.</p>
    <a href="https://github.com/nosaile/codeup-web-exercises/blob/main/JS/weathermap_project.js" target="_blank" class="btn" style="background-color: #749280; border-style: solid; border-color: #9f9f95">Check out the code  here!</a>
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
    <p class="card-text">A really fun group project! We had the assignment of creating a webpage for a fictional coffee company. We implemented many features into our design including many filter options to narrow help assist the customer by narrowing their search accurately. We also have added an ability to create a custom coffee and give the customer the ability to add that coffee to the menu.</p>
    <a href="https://james-chris-mark.github.io/coffee-project/" target="_blank" class="btn" style="background-color: #749280; border-style: solid; border-color: #9f9f95">Check it out here!</a>
  </div>
</div>
<br>
<!--insert new project gallery here-->
</section>
<div class="col-lg-6">
<section id="aboutme" class="aboutme card hide" style="background-color: #749280">
<div>
<p>My name is Chris Eliason</p>
<p>I live in ft worth, tx</p>
<p>I enjoy spending time outdoors on my bike riding trails, and along the trinity river</p>
<p>Currently I am in school to become a web developer learning skills in javascript, html, css, java, MySQL and spring</p>
</div>
</section>
<br>
<section id="contact">
<div class="card me-3 highlight" >
  <div class="card-header text-center text-dark me-0" style="background-color: #749280">
    Let's Connect!
  </div>
  <ul class="list-group contact-list text-center list-group-flush">
    <li class="list-group-item" style="background-color: #749280"><a class="github_link" href="https://github.com/nosaile" target="_blank">github</a></li>
    <li class="list-group-item" style="background-color: #749280"><a class="linkedin_link" href="https://www.linkedin.com/in/christopher-eliason-3649b4231/" target="_blank">LinkedIn</a></li>
    <li class="list-group-item" style="background-color: #749280">eliason.chris1@gmail.com</li>
  </ul>
</div>
</section>
</div>
</div>
</div>

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

    $('.head-header').on('click', function (e) {
        location.reload()
    });
}