"use strict";
renderHTML();
homeEvent()
projectsEvent();


function renderHTML() {
    let html = "";
    html += `
<nav class="navbar  sticky-top navbar-expand-lg navbar-light" style="align-content: center">
  <div class="container-fluid">
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto me-auto mb-2 mb-lg-0 ">
         <li class="nav-item">
          <a class="nav-link active" id="home" style="color: black; margin-right: 50px" href="#">(home)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="project" style="color: black; margin-right: 50px">(projects)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="about" style="color: black; margin-right: 50px">(about)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="contact" style="color: black; margin-right: 50px">(contact)</a>
        </li>
      </ul>
    </div>
    </div>
</nav>
  
      <div class="project-selection hide">
            <a href="https://github.com/Project-Vetted/vetted" target="_blank" class="btn" style="background-color: transparent; border-color: transparent">[ project vetted </a>
            <a href="https://github.com/nosaile/codeup-web-exercises/blob/main/JS/weathermap_project.js" target="_blank" class="btn" style="background-color: transparent; border-color: transparent">weather map </button>
            <a href="https://github.com/Chris-Keith/ContactsManager/tree/dev/src" target="_blank" class="btn" style="background-color: transparent; border-color: transparent">contacts manager </button>
            <a href="https://james-chris-mark.github.io/coffee-project/" target="_blank" class="btn" style="background-color: transparent; border-color: transparent">coffee shop </button>
            <a href="https://rich-chris.github.io/RichandChris-movieApp/" target="_blank" class="btn" style="background-color: transparent; border-color: transparent">movies api ]</button>
</div>

<div class="about-me hide" style="text-align: center">
<p>I'm from Austin, Texas but grew up in Tuscaloosa, Alabama and then moved to Johnson City, Tennessee. After that I moved back to Texas this time settling  in Lubbock.
 After I graduated from high school I enlisted in the United States Marine Corps where I served 4 years as a Field Radio Operator
stationed in Camp Pendleton, California. After my service, I began trying to find a career field that was interesting to me, and more importantly one I was passionate about.
Eventually after a few years I discovered software development through Codeup's full stack web development course. It was an amazing experience learning to code
and I am so grateful to have found such an awesome industry.</p>
<p>
In my free time I like to take my bike out to New Mexico or Palo Duro Canyon and do some mountain biking. I've always enjoyed being out in nature from a young age
when I first learned about mountain biking. I'm a huge Indianapolis Colts fan. I watch most other sports but mainly professional football.
I also enjoy video games like Warthunder, Pokemon, No Man's Sky,and many more! LOTR, SW, HP, in that order.
</p>
<p>
If you would like to keep up with the projects I work on or would like to collaborate please reach out to me! Thanks for stopping by :)
</p>
</div>

<div class="contact-me hide">

<a id="linkedIn" type="button" target="_blank" href="https://www.linkedin.com/in/christopher-eliason/">
<img src="../assets/iconmonstr-linkedin-3.svg" alt="linkedIn"></a>

<a href="https://github.com/nosaile" target="_blank">
<img src="../assets/iconmonstr-github-3.svg" alt="github"></a>

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

    function aboutEvent() {
        $('#about').on('click', function (e) {
            e.preventDefault();
            $('.about-me').toggleClass('hide');
            if ($('.project-selection').hasClass('hide')) {

            } else if ($('.my-name').hasClass('hide')) {

            } else if ($('.project-selection').hasClass('show')) {
                $('.project-selection').toggleClass('hide');

            } else if ($('.my-name').hasClass('show')) {
                $('.project-selection').toggleClass('hide');
            }

        });
    }

    aboutEvent();

    function contactEvent() {
        $('#contact').on('click', function (e) {
            e.preventDefault();
            $('.contact-me').toggleClass('hide');
            if ($('.project-selection').hasClass('hide')) {

            } else if ($('.my-name').hasClass('hide')) {

            } else if ($('.project-selection').hasClass('show')) {
                $('.project-selection').toggleClass('hide');

            } else if ($('.my-name').hasClass('show')) {
                $('.project-selection').toggleClass('hide');
            } else if ($('.about-me').hasClass('show')) {
                $('.about-me').toggleClass('hide');

            } else if ($('.about-me').toggleClass('hide')) {

            }

        });
    }
    contactEvent();

}