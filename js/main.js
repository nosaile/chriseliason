"use strict";
renderHTML();
homeEvent()
projectsEvent();


function renderHTML() {
    let html = "";
    html += `
<nav class="navbar  sticky-top navbar-expand-lg navbar-light" style="align-content: center">
  <div class="container-fluid">
<!--    <a class="navbar-brand" style="color: black" href="#">-->
<!--      <img src="../assets/newheadshot.PNG" alt="photo of christopher eliason" style="border-radius: 100px; height: 100px; width: 100px">-->
<!--      christopher eliason</a>-->
     
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto me-auto mb-2 mb-lg-0 ">
         <li class="nav-item">
          <a class="nav-link active" id="home" style="color: black; margin-right: 50px" href="#">(home)</a>
          <a class="vetted hide">project vetted</a>
          <a class="weathermap hide">weather map</a>
          <a class="contacts-manager hide">contacts manager</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="project" style="color: black; margin-right: 50px">(projects)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="about" style="color: black; margin-right: 50px" href="#">(about)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="contact" style="color: black; margin-right: 50px" href="#">(contact)</a>
        </li>
      </ul>
    </div>
    </div>
</nav>
<div class="card weather-map mx-auto hide"  style="border: none;background: transparent">
        <div class="card-body">
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
          <a href="https://github.com/nosaile/codeup-web-exercises/blob/main/JS/weathermap_project.js" target="_blank" class="btn" style="background-color: black; color: white; border-style: solid; border-color: #9f9f95">check out the code  here!</a>
                    <a id="return-projects" target="_blank" class="btn" style="background-color: black; color: white; border-style: solid; border-color: #9f9f95">return to projects</a>

        </div>
      </div>  
      <div class="card weather-map mx-auto hide"  style="border: none;background: transparent">
        <div class="card-body">
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
          <a href="https://github.com/nosaile/codeup-web-exercises/blob/main/JS/weathermap_project.js" target="_blank" class="btn" style="background-color: black; color: white; border-style: solid; border-color: #9f9f95">check out the code  here!</a>
                    <a id="return-projects" target="_blank" class="btn" style="background-color: black; color: white; border-style: solid; border-color: #9f9f95">return to projects</a>

        </div>
      </div>
      <div class="card weather-map mx-auto hide"  style="border: none;background: transparent">
        <div class="card-body">
          <h5 class="card-title text-center">Weather Map</h5>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/man1.png" class="d-block w-100" alt="weather map project">
              </div>
              <div class="carousel-item">
                <img src="../assets/man2.png" class="d-block w-100" alt="weather map project">
              </div>
              <div class="carousel-item">
                <img src="../assets/man3.png" class="d-block w-100" alt="weather map project">
              </div>
              <div class="carousel-item">
                <img src="../assets/man4.png" class="d-block w-100" alt="weather map project">
              </div>
              <div class="carousel-item">
                <img src="../assets/man5.png" class="d-block w-100" alt="weather map project">
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
          <a href="https://github.com/nosaile/codeup-web-exercises/blob/main/JS/weathermap_project.js" target="_blank" class="btn" style="background-color: black; color: white; border-style: solid; border-color: #9f9f95">check out the code  here!</a>
                    <a id="return-projects" target="_blank" class="btn" style="background-color: black; color: white; border-style: solid; border-color: #9f9f95">return to projects</a>

        </div>
      </div>    
      <div class="project-selection hide">
<button class="vetted" style="background-color: transparent; border-color: transparent">[ project vetted </button>
          <button class="weathermap" style="background-color: transparent; border-color: transparent">weather map </button>
          <button class="contactsmanager" style="background-color: transparent; border-color: transparent">contacts manager ]</button>
</div>


<div class="my-name">
<div class="welcome-small">
<div class="jumbotron jumbotron-fluid">
  <div class="container row">
    <h1 class="display-4 col">chris eliason</h1>
  </div>
</div>
</div>
<div class="welcome">
<div class="jumbotron jumbotron-fluid">
  <div class="container row">
    <h1 class="display-4 col">christopher eliason</h1>
  </div>
</div>
</div>
</div>
`
    $('#body').html(html);


    //
    // $('.about').on('click', function (e) {
    //     e.preventDefault();
    //     $('.aboutme').toggleClass('hide');
    // });
    //
    // $('.contact').on('click', function (e) {
    //     e.preventDefault();
    //     $('#contact').toggleClass('hide');
    // });
    //
    // $('.head-header').on('click', function (e) {
    //     location.reload()
    // });
}

function homeEvent() {
    $("#home").on('click', function (e) {
        document.location.reload();
    });
}

function projectsEvent() {
    $('#project').on('click', function (e) {
        e.preventDefault();
        $('.project-selection').toggleClass('hide');
        $('.my-name').toggleClass('hide');
    });

    $('#return-projects').on('click', function (e) {
        e.preventDefault();
        $('.weather-map').toggleClass('hide');
        $('.project-selection').toggleClass('hide');

    });

    $('.weathermap').on('click', function (e) {
        e.preventDefault();
        $('.weather-map').toggleClass('hide');
        $('.project-selection').toggleClass('hide');
    });

    $('.contactsmanager').on('click', function (e) {
        e.preventDefault();
        $('.contacts-manager').toggleClass('hide');
        $('.project-selection').toggleClass('hide');
    });


}