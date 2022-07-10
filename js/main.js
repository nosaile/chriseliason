"use strict";
renderHTML()

function renderHTML() {
    let html = "";
    html += `<nav class="navbar  sticky-top navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" style="color: ghostwhite" href="#">
      <img src="../assets/newheadshot.PNG" alt="" width="100" height="100" style="border-radius: 100px">
      christopher eliason</a>
     
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li class="nav-item col-3" >
          <a class="nav-link " href="#"></a>
        </li>
        <li class="nav-item col-3" >
          <a class="nav-link " href="#"></a>
        </li>
        <li class="nav-item col-3" >
          <a class="nav-link " href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style="color: ghostwhite; margin-right: 50px" href="#">projects</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" style="color: ghostwhite; margin-right: 50px" href="#">about</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" style="color: ghostwhite; margin-right: 50px" href="#">contact</a>
        </li>
      </ul>
    </div>
    </div>
</nav>
<hr style="color: black; margin-left: 2em; margin-right: 2em">
<div class="content">

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