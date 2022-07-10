"use strict";
renderHTML()


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
          <a class="nav-link active" style="color: black; margin-right: 50px" href="#">(home)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style="color: black; margin-right: 50px" href="#">(projects)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style="color: black; margin-right: 50px" href="#">(about)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style="color: black; margin-right: 50px" href="#">(contact)</a>
        </li>
      </ul>
    </div>
    </div>
</nav>
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

`
    $('#body').html(html)


    //
    // $('.about').on('click', function (e) {
    //     e.preventDefault();
    //     $('.aboutme').toggleClass('hide');
    // });
    //
    // $('.gallery').on('click', function (e) {
    //     e.preventDefault();
    //     $('#projects').toggleClass('hide');
    // });
    // $('.contact').on('click', function (e) {
    //     e.preventDefault();
    //     $('#contact').toggleClass('hide');
    // });
    //
    // $('.head-header').on('click', function (e) {
    //     location.reload()
    // });
}